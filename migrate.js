// Idempotent schema setup. schema.sql uses CREATE TABLE IF NOT EXISTS, so
// running this on every boot is safe. node-pg executes multiple
// semicolon-separated statements in a single parameter-less query.
const fs = require('fs');
const path = require('path');

module.exports = async function migrate(db) {
  const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  await db.query(sql);
};
