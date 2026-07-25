-- PostgreSQL schema for apex-backend
-- Apply with: psql "$DATABASE_URL" -f schema.sql

CREATE TABLE IF NOT EXISTS users (
  id            SERIAL PRIMARY KEY,
  email         TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  is_premium    BOOLEAN NOT NULL DEFAULT FALSE,
  is_admin      BOOLEAN NOT NULL DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Existing databases created before is_admin was added need the column too.
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT FALSE;

-- One row per user holding the whole Study Journal progress state
-- (completed lessons, streak, last visit, board, tier) as JSON. This mirrors
-- the frontend's single state object, so syncing is a straight read/write.
CREATE TABLE IF NOT EXISTS user_progress (
  user_id    INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  data       JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ---------------------------------------------------------------------------
-- Study materials (the curriculum) as first-class data.
--
-- Seeded from curriculum.js via `npm run db:seed` (and seed-if-empty on boot),
-- and editable through the admin CRUD API. The nested browser shape
-- (window.CURRICULUM) is reconstructed from these three tables on read.
-- ---------------------------------------------------------------------------

-- One row per subject, e.g. ENG / MAT / SCI. `position` fixes display order.
CREATE TABLE IF NOT EXISTS subjects (
  id         TEXT PRIMARY KEY,          -- short code: "ENG", "MAT", "SCI"
  name       TEXT NOT NULL,             -- human label: "English Language"
  position   INTEGER NOT NULL DEFAULT 0
);

-- One row per lesson/topic. Naturally-nested fields (specRef, commandWords,
-- examples, extended) stay as JSONB; the list-like questions get their own
-- table below. (subject_id, unit) is unique so seeding and CRUD can upsert.
CREATE TABLE IF NOT EXISTS lessons (
  id            SERIAL PRIMARY KEY,
  subject_id    TEXT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  unit          INTEGER NOT NULL,
  title         TEXT NOT NULL,
  summary       TEXT NOT NULL DEFAULT '',
  tier          TEXT NOT NULL DEFAULT 'F',
  spec_ref      JSONB NOT NULL DEFAULT '{}'::jsonb,
  concept       TEXT NOT NULL DEFAULT '',
  command_words JSONB NOT NULL DEFAULT '[]'::jsonb,
  examples      JSONB NOT NULL DEFAULT '[]'::jsonb,
  extended      JSONB,                  -- optional 6-mark extended response
  position      INTEGER NOT NULL DEFAULT 0,
  UNIQUE (subject_id, unit)
);

-- Practice questions for a lesson, ordered by `position`.
CREATE TABLE IF NOT EXISTS questions (
  id          SERIAL PRIMARY KEY,
  lesson_id   INTEGER NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  position    INTEGER NOT NULL DEFAULT 0,
  q           TEXT NOT NULL,
  a           TEXT NOT NULL DEFAULT '',
  marks       INTEGER NOT NULL DEFAULT 1,
  markscheme  TEXT NOT NULL DEFAULT '',
  tier        TEXT NOT NULL DEFAULT 'F',
  self_check  BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE INDEX IF NOT EXISTS idx_lessons_subject ON lessons(subject_id);
CREATE INDEX IF NOT EXISTS idx_questions_lesson ON questions(lesson_id);
