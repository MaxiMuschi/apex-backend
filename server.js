// Production entrypoint: ensure the schema exists, then wire the real pg
// pool into the Express app and listen.
const db = require('./db');
const createApp = require('./api');
const migrate = require('./migrate');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await migrate(db);
    console.log('schema ready');
  } catch (err) {
    console.error('migration failed:', err.message);
    process.exit(1);
  }
  createApp(db).listen(PORT, () => {
    console.log(`API listening on :${PORT}`);
  });
})();
