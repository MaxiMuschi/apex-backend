// Production entrypoint: wire the real pg pool into the Express app.
const db = require('./db');
const createApp = require('./api');

const PORT = process.env.PORT || 3000;

createApp(db).listen(PORT, () => {
  console.log(`API listening on :${PORT}`);
});
