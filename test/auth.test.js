// HTTP tests for the auth API. Runs against an in-memory Postgres (pg-mem)
// loaded from the real schema.sql — no live database needed.
process.env.JWT_SECRET = 'test-secret';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const request = require('supertest');
const { newDb } = require('pg-mem');
const createApp = require('../api');

const SCHEMA = fs.readFileSync(path.join(__dirname, '..', 'schema.sql'), 'utf8');

// Build a fresh app + isolated in-memory db for each test.
function freshApp() {
  const mem = newDb();
  mem.public.none(SCHEMA);
  const { Pool } = mem.adapters.createPg();
  const pool = new Pool();
  const db = { query: (text, params) => pool.query(text, params), pool };
  return { app: createApp(db), db };
}

const CREDS = { email: 'alice@example.com', password: 'sup3rsecret!' };

async function signup(app, creds = CREDS) {
  return request(app).post('/api/signup').send(creds);
}

test('GET /health returns ok', async () => {
  const { app } = freshApp();
  const res = await request(app).get('/health');
  assert.equal(res.status, 200);
  assert.equal(res.body.status, 'ok');
});

test('signup creates a user and returns a token (201)', async () => {
  const { app } = freshApp();
  const res = await signup(app);
  assert.equal(res.status, 201);
  assert.ok(res.body.token, 'expected a JWT');
  assert.equal(res.body.user.email, CREDS.email);
  assert.equal(res.body.user.is_premium, false);
  assert.ok(res.body.user.id);
  assert.equal(res.body.user.password_hash, undefined, 'must not leak hash');
});

test('signup stores a bcrypt hash, not the plaintext password', async () => {
  const { app, db } = freshApp();
  await signup(app);
  const { rows } = await db.query('SELECT password_hash FROM users WHERE email = $1', [
    CREDS.email,
  ]);
  const hash = rows[0].password_hash;
  assert.notEqual(hash, CREDS.password);
  assert.match(hash, /^\$2[aby]\$/, 'looks like a bcrypt hash');
  assert.ok(require('bcryptjs').compareSync(CREDS.password, hash));
});

test('signup with a duplicate email is rejected (409)', async () => {
  const { app } = freshApp();
  await signup(app);
  const res = await signup(app);
  assert.equal(res.status, 409);
});

test('duplicate detection is case-insensitive (409)', async () => {
  const { app } = freshApp();
  await signup(app);
  const res = await signup(app, { ...CREDS, email: 'ALICE@example.com' });
  assert.equal(res.status, 409);
});

test('signup requires both email and password (400)', async () => {
  const { app } = freshApp();
  const res = await request(app).post('/api/signup').send({ email: CREDS.email });
  assert.equal(res.status, 400);
});

test('signup rejects an invalid email (400)', async () => {
  const { app } = freshApp();
  const res = await signup(app, { email: 'not-an-email', password: CREDS.password });
  assert.equal(res.status, 400);
});

test('signup rejects a too-short password (400)', async () => {
  const { app } = freshApp();
  const res = await signup(app, { email: CREDS.email, password: 'short' });
  assert.equal(res.status, 400);
});

test('login with correct credentials succeeds (200)', async () => {
  const { app } = freshApp();
  await signup(app);
  const res = await request(app).post('/api/login').send(CREDS);
  assert.equal(res.status, 200);
  assert.ok(res.body.token);
  assert.equal(res.body.user.email, CREDS.email);
});

test('login email is case-insensitive (200)', async () => {
  const { app } = freshApp();
  await signup(app);
  const res = await request(app)
    .post('/api/login')
    .send({ email: 'Alice@Example.com', password: CREDS.password });
  assert.equal(res.status, 200);
});

test('login with a wrong password is rejected (401)', async () => {
  const { app } = freshApp();
  await signup(app);
  const res = await request(app)
    .post('/api/login')
    .send({ email: CREDS.email, password: 'wrong-password' });
  assert.equal(res.status, 401);
});

test('login with an unknown email is rejected (401)', async () => {
  const { app } = freshApp();
  const res = await request(app).post('/api/login').send(CREDS);
  assert.equal(res.status, 401);
});

test('GET /api/me requires a valid token', async () => {
  const { app } = freshApp();
  const { body } = await signup(app);
  // With a valid token → 200 and the current user.
  const ok = await request(app).get('/api/me').set('Authorization', `Bearer ${body.token}`);
  assert.equal(ok.status, 200);
  assert.equal(ok.body.user.email, CREDS.email);
  // Without a token → 401.
  const no = await request(app).get('/api/me');
  assert.equal(no.status, 401);
});
