// Production entrypoint: ensure the schema exists, then wire the real pg
// pool into the Express app and listen.
const db = require('./db');
const createApp = require('./api');
const migrate = require('./migrate');
const { seedIfEmpty } = require('./seed');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await migrate(db);
    console.log('schema ready');
  } catch (err) {
    console.error('migration failed:', err.message);
    process.exit(1);
  }
  try {
    const result = await seedIfEmpty(db, { log: (m) => console.log(m) });
    if (result) console.log('curriculum seeded');
  } catch (err) {
    // Seeding failure shouldn't stop the API from serving existing data.
    console.error('curriculum seed skipped:', err.message);
  }
  createApp(db).listen(PORT, () => {
    console.log(`API listening on :${PORT}`);
  });
})();
