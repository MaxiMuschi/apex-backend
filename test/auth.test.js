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

test('signup rejects a whitespace-only email (400)', async () => {
  const { app } = freshApp();
  const res = await signup(app, { email: '   ', password: CREDS.password });
  assert.equal(res.status, 400);
});

test('signup rejects a whitespace-only password (400)', async () => {
  const { app } = freshApp();
  const res = await signup(app, { email: CREDS.email, password: '        ' });
  assert.equal(res.status, 400);
});

test('signup trims surrounding whitespace in the email', async () => {
  const { app, db } = freshApp();
  const res = await signup(app, { email: '  spaced@example.com  ', password: CREDS.password });
  assert.equal(res.status, 201);
  assert.equal(res.body.user.email, 'spaced@example.com');
  const { rows } = await db.query('SELECT email FROM users');
  assert.equal(rows[0].email, 'spaced@example.com', 'stored email has no surrounding spaces');
});

test('login rejects a whitespace-only password (400)', async () => {
  const { app } = freshApp();
  await signup(app);
  const res = await request(app)
    .post('/api/login')
    .send({ email: CREDS.email, password: '   ' });
  assert.equal(res.status, 400);
});

test('login tolerates surrounding whitespace in the email', async () => {
  const { app } = freshApp();
  await signup(app);
  const res = await request(app)
    .post('/api/login')
    .send({ email: `  ${CREDS.email}  `, password: CREDS.password });
  assert.equal(res.status, 200);
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

// --- Progress ----------------------------------------------------------
const SAMPLE_PROGRESS = {
  completed: { ENG: [1, 2], MAT: [1], SCI: [] },
  streak: 3,
  lastVisit: '2026-06-15',
  board: 'AQA',
  tier: 'Higher',
};

async function authedApp() {
  const { app, db } = freshApp();
  const { body } = await signup(app);
  return { app, db, token: body.token };
}

test('GET /api/progress requires a token (401)', async () => {
  const { app } = freshApp();
  const res = await request(app).get('/api/progress');
  assert.equal(res.status, 401);
});

test('GET /api/progress is null before anything is saved', async () => {
  const { app, token } = await authedApp();
  const res = await request(app).get('/api/progress').set('Authorization', `Bearer ${token}`);
  assert.equal(res.status, 200);
  assert.equal(res.body.progress, null);
});

test('PUT then GET /api/progress round-trips the saved state', async () => {
  const { app, token } = await authedApp();
  const put = await request(app)
    .put('/api/progress')
    .set('Authorization', `Bearer ${token}`)
    .send(SAMPLE_PROGRESS);
  assert.equal(put.status, 200);
  assert.deepEqual(put.body.progress, SAMPLE_PROGRESS);

  const get = await request(app).get('/api/progress').set('Authorization', `Bearer ${token}`);
  assert.equal(get.status, 200);
  assert.deepEqual(get.body.progress, SAMPLE_PROGRESS);
});

test('PUT /api/progress upserts (second write overwrites the first)', async () => {
  const { app, token } = await authedApp();
  await request(app)
    .put('/api/progress')
    .set('Authorization', `Bearer ${token}`)
    .send(SAMPLE_PROGRESS);
  const updated = { ...SAMPLE_PROGRESS, streak: 9 };
  await request(app)
    .put('/api/progress')
    .set('Authorization', `Bearer ${token}`)
    .send(updated);
  const get = await request(app).get('/api/progress').set('Authorization', `Bearer ${token}`);
  assert.equal(get.body.progress.streak, 9);
});

test('PUT /api/progress rejects a non-object body (400)', async () => {
  const { app, token } = await authedApp();
  const res = await request(app)
    .put('/api/progress')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send('[1,2,3]');
  assert.equal(res.status, 400);
});

test('one user cannot see another user\'s progress', async () => {
  const { app } = freshApp();
  const a = (await signup(app)).body.token;
  await request(app).put('/api/progress').set('Authorization', `Bearer ${a}`).send(SAMPLE_PROGRESS);
  const bToken = (await signup(app, { email: 'bob@example.com', password: 'sup3rsecret!' })).body
    .token;
  const res = await request(app).get('/api/progress').set('Authorization', `Bearer ${bToken}`);
  assert.equal(res.status, 200);
  assert.equal(res.body.progress, null);
});
