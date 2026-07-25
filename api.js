// Express API factory. Takes a db dependency so it can run against either
// the real pg pool (server.js) or an in-memory Postgres (tests).
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const makeUsers = require('./users');
const makeProgress = require('./progress');
const makeMaterials = require('./materials');

// CORS origin for the (separately hosted) static frontend. "*" by default
// since auth uses Bearer tokens, not cookies; set CORS_ORIGIN to lock it down.
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

// Bootstrap admins by email (comma-separated), so the first admin can exist
// without hand-editing the database. A user is treated as admin if this list
// contains their email OR their users.is_admin column is true.
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
const JWT_EXPIRES_IN = '7d';
const BCRYPT_ROUNDS = 10;
const MIN_PASSWORD = 8;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Never leak password_hash to clients.
function publicUser(row) {
  return {
    id: row.id,
    email: row.email,
    is_premium: row.is_premium === true,
    is_admin: row.is_admin === true,
  };
}
function signToken(user) {
  return jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

// JWT auth middleware: verifies the Bearer token and sets req.user.
function requireAuth(req, res, next) {
  const m = /^Bearer (.+)$/.exec(req.headers.authorization || '');
  if (!m) return res.status(401).json({ error: 'missing token' });
  try {
    req.user = jwt.verify(m[1], JWT_SECRET);
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'invalid token' });
  }
}

module.exports = function createApp(db) {
  const users = makeUsers(db);
  const progress = makeProgress(db);
  const materials = makeMaterials(db);
  const app = express();
  app.use(express.json());

  // --- CORS (frontend is served from a different origin) ---------------
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', CORS_ORIGIN);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    return next();
  });

  // Admin gate: runs after requireAuth. Confirms the caller is an admin, by
  // the ADMIN_EMAILS bootstrap list or the users.is_admin column.
  async function requireAdmin(req, res, next) {
    try {
      const row = await users.findByEmail(req.user.email);
      if (!row) return res.status(401).json({ error: 'user not found' });
      const admin = row.is_admin === true || ADMIN_EMAILS.includes(String(row.email).toLowerCase());
      if (!admin) return res.status(403).json({ error: 'admin only' });
      return next();
    } catch (err) {
      return res.status(500).json({ error: 'internal error' });
    }
  }

  // Validate an incoming lesson payload. `requireUnit` is true for create
  // (unit comes from the body) and false for update (unit comes from the URL).
  function validateLesson(body, { requireUnit }) {
    if (body === null || typeof body !== 'object' || Array.isArray(body)) {
      return 'lesson must be a JSON object';
    }
    if (requireUnit && !Number.isInteger(body.unit)) {
      return 'unit must be an integer';
    }
    if (typeof body.title !== 'string' || !body.title.trim()) {
      return 'title is required';
    }
    if (body.questions !== undefined && !Array.isArray(body.questions)) {
      return 'questions must be an array';
    }
    return null;
  }

  app.get('/health', (req, res) => res.json({ status: 'ok' }));

  // --- Sign up ---------------------------------------------------------
  app.post('/api/signup', async (req, res) => {
    try {
      let { email, password } = req.body || {};
      email = typeof email === 'string' ? email.trim() : '';
      // Reject blank or whitespace-only fields. Don't trim the password we
      // hash — spaces can be part of a real password.
      if (!email || !password || !String(password).trim()) {
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
      let { email, password } = req.body || {};
      email = typeof email === 'string' ? email.trim() : '';
      if (!email || !password || !String(password).trim()) {
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
  app.get('/api/me', requireAuth, async (req, res) => {
    try {
      const row = await users.findByEmail(req.user.email);
      if (!row) return res.status(401).json({ error: 'user not found' });
      return res.json({ user: publicUser(row) });
    } catch (err) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  // --- Progress (JWT-protected) ----------------------------------------
  // GET returns the saved state (or null if none saved yet).
  app.get('/api/progress', requireAuth, async (req, res) => {
    try {
      const data = await progress.get(req.user.sub);
      return res.json({ progress: data });
    } catch (err) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  // PUT replaces the saved state with the request body.
  app.put('/api/progress', requireAuth, async (req, res) => {
    const data = req.body;
    if (data === null || typeof data !== 'object' || Array.isArray(data)) {
      return res.status(400).json({ error: 'progress must be a JSON object' });
    }
    try {
      const saved = await progress.save(req.user.sub, data);
      return res.json({ progress: saved.data, updated_at: saved.updated_at });
    } catch (err) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  // --- Curriculum: public reads ----------------------------------------
  // The whole tree, in the browser's window.CURRICULUM shape.
  app.get('/api/curriculum', async (req, res) => {
    try {
      return res.json({ curriculum: await materials.getTree() });
    } catch (err) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  // All lessons for one subject (e.g. /api/curriculum/ENG).
  app.get('/api/curriculum/:subject', async (req, res) => {
    try {
      const subject = String(req.params.subject).toUpperCase();
      const lessons = await materials.getSubjectLessons(subject);
      if (!lessons) return res.status(404).json({ error: 'unknown subject' });
      return res.json({ subject, lessons });
    } catch (err) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  // A single lesson by subject + unit.
  app.get('/api/curriculum/:subject/:unit', async (req, res) => {
    const unit = Number.parseInt(req.params.unit, 10);
    if (!Number.isInteger(unit)) return res.status(400).json({ error: 'unit must be an integer' });
    try {
      const subject = String(req.params.subject).toUpperCase();
      const lesson = await materials.getLesson(subject, unit);
      if (!lesson) return res.status(404).json({ error: 'lesson not found' });
      return res.json({ lesson });
    } catch (err) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  // --- Curriculum: admin writes (create / update / delete) -------------
  app.post('/api/curriculum/:subject', requireAuth, requireAdmin, async (req, res) => {
    const err = validateLesson(req.body, { requireUnit: true });
    if (err) return res.status(400).json({ error: err });
    try {
      const subject = String(req.params.subject).toUpperCase();
      const result = await materials.createLesson(subject, req.body);
      if (result.error) return res.status(404).json({ error: result.error });
      return res.status(201).json({ lesson: result.lesson });
    } catch (e) {
      if (e && e.code === '23505') {
        return res.status(409).json({ error: 'a lesson with that unit already exists' });
      }
      return res.status(500).json({ error: 'internal error' });
    }
  });

  app.put('/api/curriculum/:subject/:unit', requireAuth, requireAdmin, async (req, res) => {
    const unit = Number.parseInt(req.params.unit, 10);
    if (!Number.isInteger(unit)) return res.status(400).json({ error: 'unit must be an integer' });
    const err = validateLesson(req.body, { requireUnit: false });
    if (err) return res.status(400).json({ error: err });
    try {
      const subject = String(req.params.subject).toUpperCase();
      const result = await materials.updateLesson(subject, unit, req.body);
      if (!result) return res.status(404).json({ error: 'lesson not found' });
      return res.json({ lesson: result.lesson });
    } catch (e) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  app.delete('/api/curriculum/:subject/:unit', requireAuth, requireAdmin, async (req, res) => {
    const unit = Number.parseInt(req.params.unit, 10);
    if (!Number.isInteger(unit)) return res.status(400).json({ error: 'unit must be an integer' });
    try {
      const subject = String(req.params.subject).toUpperCase();
      const ok = await materials.deleteLesson(subject, unit);
      if (!ok) return res.status(404).json({ error: 'lesson not found' });
      return res.status(204).end();
    } catch (e) {
      return res.status(500).json({ error: 'internal error' });
    }
  });

  return app;
};
