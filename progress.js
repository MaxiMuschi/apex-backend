// Progress data-access (PostgreSQL via pg). Factory takes a db dependency so
// the HTTP tests can inject an in-memory Postgres. Stores the whole progress
// state as a JSONB blob, one row per user.
module.exports = function makeProgress(db) {
  // Defensive parse: real pg returns jsonb already parsed; some adapters
  // (and TEXT fallbacks) hand back a string.
  function asObject(value) {
    if (value == null) return null;
    return typeof value === 'string' ? JSON.parse(value) : value;
  }

  async function get(userId) {
    const { rows } = await db.query(
      'SELECT data FROM user_progress WHERE user_id = $1',
      [userId]
    );
    return rows[0] ? asObject(rows[0].data) : null;
  }

  // Upsert the blob; returns the stored data and its updated_at timestamp.
  async function save(userId, data) {
    const { rows } = await db.query(
      `INSERT INTO user_progress (user_id, data, updated_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (user_id)
       DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()
       RETURNING data, updated_at`,
      [userId, JSON.stringify(data)]
    );
    return { data: asObject(rows[0].data), updated_at: rows[0].updated_at };
  }

  return { get, save };
};
