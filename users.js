const db = require('./db');

// SELECT one user by email. Postgres uses $1 placeholders and returns a
// promise of { rows }; there is no callback/`row` argument like sqlite3.
// LOWER(...) matches the case-insensitive unique index in schema.sql.
async function findByEmail(email) {
  const { rows } = await db.query(
    'SELECT * FROM users WHERE LOWER(email) = LOWER($1)',
    [email]
  );
  return rows[0] || null;
}

// INSERT a user. Postgres has no `this.lastID`; use RETURNING to get the
// generated identity value back.
async function createUser(email, passwordHash) {
  const { rows } = await db.query(
    'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id',
    [email, passwordHash]
  );
  return rows[0].id;
}

module.exports = { findByEmail, createUser };
