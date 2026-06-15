// Users data-access (PostgreSQL via pg). Factory takes a db dependency
// ({ query }) so the HTTP tests can inject an in-memory Postgres.
module.exports = function makeUsers(db) {
  // SELECT one user by email, case-insensitive (LOWER matches either case).
  async function findByEmail(email) {
    const { rows } = await db.query(
      'SELECT * FROM users WHERE LOWER(email) = LOWER($1)',
      [email]
    );
    return rows[0] || null;
  }

  // INSERT a user. Postgres has no `this.lastID`; RETURNING id gives the
  // generated identity value back.
  async function createUser(email, passwordHash) {
    const { rows } = await db.query(
      'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id',
      [email, passwordHash]
    );
    return rows[0].id;
  }

  return { findByEmail, createUser };
};
