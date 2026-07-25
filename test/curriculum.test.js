// HTTP tests for the curriculum (study materials) API. Runs against an
// in-memory Postgres (pg-mem) loaded from the real schema.sql and seeded from
// the real curriculum.js — no live database needed.
process.env.JWT_SECRET = 'test-secret';
// A bootstrap admin email, to test the ADMIN_EMAILS escape hatch. Must be set
// before requiring ../api, which reads it once at load time.
process.env.ADMIN_EMAILS = 'boot-admin@example.com';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const request = require('supertest');
const { newDb } = require('pg-mem');
const createApp = require('../api');
const seed = require('../seed');

const SCHEMA = fs.readFileSync(path.join(__dirname, '..', 'schema.sql'), 'utf8');

// Fresh app + isolated in-memory db, seeded with the real curriculum.
async function seededApp() {
  const mem = newDb();
  mem.public.none(SCHEMA);
  const { Pool } = mem.adapters.createPg();
  const pool = new Pool();
  const db = { query: (text, params) => pool.query(text, params), pool };
  await seed(db);
  return { app: createApp(db), db };
}

const CREDS = { email: 'alice@example.com', password: 'sup3rsecret!' };

async function tokenFor(app, creds) {
  const res = await request(app).post('/api/signup').send(creds);
  return res.body.token;
}

// Sign up a user and promote them to admin via the is_admin column.
async function adminToken(app, db, email = 'admin@example.com') {
  const token = await tokenFor(app, { email, password: 'sup3rsecret!' });
  await db.query('UPDATE users SET is_admin = TRUE WHERE LOWER(email) = LOWER($1)', [email]);
  return token;
}

const NEW_LESSON = {
  unit: 99,
  title: 'Test Topic',
  summary: 'A seeded test topic.',
  tier: 'F',
  specRef: { AQA: 'X.1' },
  concept: 'Concept text.',
  commandWords: ['identify'],
  examples: ['Example one.', 'Example two.'],
  questions: [
    { q: 'What is 2+2?', a: '4', marks: 1, markscheme: '4', tier: 'F', selfCheck: true },
    { q: 'Open question?', a: '', marks: 2, markscheme: 'Any valid point.', tier: 'F', selfCheck: false },
  ],
};

// --- Public reads ------------------------------------------------------
test('GET /api/curriculum returns the full tree with all subjects', async () => {
  const { app } = await seededApp();
  const res = await request(app).get('/api/curriculum');
  assert.equal(res.status, 200);
  const tree = res.body.curriculum;
  assert.deepEqual(Object.keys(tree).sort(), ['ENG', 'MAT', 'SCI']);
  assert.ok(tree.ENG.length > 0);
  // Shape is preserved (camelCase, nested questions).
  const lesson = tree.ENG[0];
  assert.equal(typeof lesson.title, 'string');
  assert.ok(lesson.specRef && typeof lesson.specRef === 'object');
  assert.ok(Array.isArray(lesson.questions));
  assert.equal(typeof lesson.questions[0].selfCheck, 'boolean');
});

test('GET /api/curriculum/:subject returns that subject\'s lessons', async () => {
  const { app } = await seededApp();
  const res = await request(app).get('/api/curriculum/ENG');
  assert.equal(res.status, 200);
  assert.equal(res.body.subject, 'ENG');
  assert.ok(Array.isArray(res.body.lessons));
  assert.ok(res.body.lessons.length > 0);
});

test('GET /api/curriculum/:subject is case-insensitive on the code', async () => {
  const { app } = await seededApp();
  const res = await request(app).get('/api/curriculum/eng');
  assert.equal(res.status, 200);
  assert.equal(res.body.subject, 'ENG');
});

test('GET /api/curriculum/:subject 404s for an unknown subject', async () => {
  const { app } = await seededApp();
  const res = await request(app).get('/api/curriculum/ZZZ');
  assert.equal(res.status, 404);
});

test('GET /api/curriculum/:subject/:unit returns a single lesson', async () => {
  const { app } = await seededApp();
  const res = await request(app).get('/api/curriculum/ENG/1');
  assert.equal(res.status, 200);
  assert.equal(res.body.lesson.unit, 1);
});

test('GET a missing lesson 404s; a non-integer unit 400s', async () => {
  const { app } = await seededApp();
  assert.equal((await request(app).get('/api/curriculum/ENG/9999')).status, 404);
  assert.equal((await request(app).get('/api/curriculum/ENG/abc')).status, 400);
});

// --- Admin writes: auth gating ----------------------------------------
test('POST create requires a token (401)', async () => {
  const { app } = await seededApp();
  const res = await request(app).post('/api/curriculum/ENG').send(NEW_LESSON);
  assert.equal(res.status, 401);
});

test('POST create is forbidden for a non-admin user (403)', async () => {
  const { app } = await seededApp();
  const token = await tokenFor(app, CREDS);
  const res = await request(app)
    .post('/api/curriculum/ENG')
    .set('Authorization', `Bearer ${token}`)
    .send(NEW_LESSON);
  assert.equal(res.status, 403);
});

// --- Admin writes: create / update / delete ---------------------------
test('admin can create a lesson (201) and it becomes readable', async () => {
  const { app, db } = await seededApp();
  const token = await adminToken(app, db);
  const create = await request(app)
    .post('/api/curriculum/ENG')
    .set('Authorization', `Bearer ${token}`)
    .send(NEW_LESSON);
  assert.equal(create.status, 201);
  assert.equal(create.body.lesson.unit, 99);
  assert.equal(create.body.lesson.questions.length, 2);
  assert.equal(create.body.lesson.questions[1].selfCheck, false);

  const read = await request(app).get('/api/curriculum/ENG/99');
  assert.equal(read.status, 200);
  assert.equal(read.body.lesson.title, 'Test Topic');
});

test('creating a duplicate unit is rejected (409)', async () => {
  const { app, db } = await seededApp();
  const token = await adminToken(app, db);
  const auth = (r) => r.set('Authorization', `Bearer ${token}`);
  await auth(request(app).post('/api/curriculum/ENG')).send(NEW_LESSON);
  const dup = await auth(request(app).post('/api/curriculum/ENG')).send(NEW_LESSON);
  assert.equal(dup.status, 409);
});

test('create validates the payload (400 on missing title)', async () => {
  const { app, db } = await seededApp();
  const token = await adminToken(app, db);
  const res = await request(app)
    .post('/api/curriculum/ENG')
    .set('Authorization', `Bearer ${token}`)
    .send({ unit: 77 });
  assert.equal(res.status, 400);
});

test('create 404s for an unknown subject', async () => {
  const { app, db } = await seededApp();
  const token = await adminToken(app, db);
  const res = await request(app)
    .post('/api/curriculum/ZZZ')
    .set('Authorization', `Bearer ${token}`)
    .send(NEW_LESSON);
  assert.equal(res.status, 404);
});

test('admin can update a lesson (200) and changes persist', async () => {
  const { app, db } = await seededApp();
  const token = await adminToken(app, db);
  const put = await request(app)
    .put('/api/curriculum/ENG/1')
    .set('Authorization', `Bearer ${token}`)
    .send({ title: 'Updated Title', questions: [] });
  assert.equal(put.status, 200);
  assert.equal(put.body.lesson.title, 'Updated Title');
  assert.equal(put.body.lesson.questions.length, 0);

  const read = await request(app).get('/api/curriculum/ENG/1');
  assert.equal(read.body.lesson.title, 'Updated Title');
});

test('updating a non-admin is forbidden (403); missing lesson 404s', async () => {
  const { app, db } = await seededApp();
  const userToken = await tokenFor(app, CREDS);
  const forbidden = await request(app)
    .put('/api/curriculum/ENG/1')
    .set('Authorization', `Bearer ${userToken}`)
    .send({ title: 'Nope' });
  assert.equal(forbidden.status, 403);

  const adminTok = await adminToken(app, db);
  const missing = await request(app)
    .put('/api/curriculum/ENG/9999')
    .set('Authorization', `Bearer ${adminTok}`)
    .send({ title: 'Ghost' });
  assert.equal(missing.status, 404);
});

test('admin can delete a lesson (204) and it disappears', async () => {
  const { app, db } = await seededApp();
  const token = await adminToken(app, db);
  const del = await request(app)
    .delete('/api/curriculum/ENG/2')
    .set('Authorization', `Bearer ${token}`);
  assert.equal(del.status, 204);
  assert.equal((await request(app).get('/api/curriculum/ENG/2')).status, 404);
  // A second delete now 404s.
  const again = await request(app)
    .delete('/api/curriculum/ENG/2')
    .set('Authorization', `Bearer ${token}`);
  assert.equal(again.status, 404);
});

test('delete is forbidden for a non-admin (403)', async () => {
  const { app } = await seededApp();
  const token = await tokenFor(app, CREDS);
  const res = await request(app)
    .delete('/api/curriculum/ENG/1')
    .set('Authorization', `Bearer ${token}`);
  assert.equal(res.status, 403);
});

// --- Admin bootstrap via ADMIN_EMAILS ---------------------------------
test('a user in ADMIN_EMAILS is treated as admin without the column', async () => {
  const { app } = await seededApp();
  // Note: never promoted via is_admin — authorised purely by ADMIN_EMAILS.
  const token = await tokenFor(app, { email: 'boot-admin@example.com', password: 'sup3rsecret!' });
  const res = await request(app)
    .post('/api/curriculum/ENG')
    .set('Authorization', `Bearer ${token}`)
    .send({ ...NEW_LESSON, unit: 88 });
  assert.equal(res.status, 201);
});
