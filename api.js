// Express API factory. Takes a db dependency so it can run against either
// the real pg pool (server.js) or an in-memory Postgres (tests).
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const makeUsers = require('./users');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
const JWT_EXPIRES_IN = '7d';
const BCRYPT_ROUNDS = 10;
const MIN_PASSWORD = 8;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Never leak password_hash to clients.
function publicUser(row) {
  return { id: row.id, email: row.email, is_premium: row.is_premium === true };
}
function signToken(user) {
  return jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

module.exports = function createApp(db) {
  const users = makeUsers(db);
  const app = express();
  app.use(express.json());

  app.get('/health', (req, res) => res.json({ status: 'ok' }));

  // --- Sign up ---------------------------------------------------------
  app.post('/api/signup', async (req, res) => {
    try {
      const { email, password } = req.body || {};
      if (!email || !password) {
        return res.status(400).json({ error: 'email and password are required' });
      }
      if (!EMAIL_RE.test(email)) {
        return res.status(400).json({ error: 'invalid email address' });
      }
      if (String(password).length < MIN_PASSWORD) {
        return res
          .status(400)
          .json({ error: `password must be at least ${MIN_PASSWORD} characters` });
      }
      if (await users.findByEmail(email)) {
        return res.status(409).json({ error: 'email already registered' });
      }
      const hash = await bcrypt.hash(password, BCRYPT_ROUNDS);
      let id;
      try {
        id = await users.createUser(email, hash);
      } catch (err) {
        // Race: unique violation between the check and the insert.
        if (err && err.code === '23505') {
          return res.status(409).json({ error: 'email already registered' });
        }
        throw err;
      }
      const user = { id, email, is_premium: false };
      return res.status(201).json({ token: signToken(user), user: publicUser(user) });
    } catch (err) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  // --- Log in ----------------------------------------------------------
  app.post('/api/login', async (req, res) => {
    try {
      const { email, password } = req.body || {};
      if (!email || !password) {
        return res.status(400).json({ error: 'email and password are required' });
      }
      const row = await users.findByEmail(email);
      if (!row) return res.status(401).json({ error: 'invalid credentials' });
      const ok = await bcrypt.compare(password, row.password_hash);
      if (!ok) return res.status(401).json({ error: 'invalid credentials' });
      return res.json({ token: signToken(row), user: publicUser(row) });
    } catch (err) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  // --- Current user (JWT-protected) ------------------------------------
  app.get('/api/me', async (req, res) => {
    const m = /^Bearer (.+)$/.exec(req.headers.authorization || '');
    if (!m) return res.status(401).json({ error: 'missing token' });
    let payload;
    try {
      payload = jwt.verify(m[1], JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: 'invalid token' });
    }
    try {
      const row = await users.findByEmail(payload.email);
      if (!row) return res.status(401).json({ error: 'user not found' });
      return res.json({ user: publicUser(row) });
    } catch (err) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  return app;
};
