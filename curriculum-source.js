// curriculum-source.js — load the browser curriculum.js in Node.
//
// curriculum.js is authored for the browser (it assigns window.CURRICULUM).
// Rather than duplicate that content, we evaluate the same file in a sandbox
// that provides a fake `window`, then return the data. This keeps a single
// source of truth: edit curriculum.js, re-seed, and the database follows.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadCurriculum() {
  const code = fs.readFileSync(path.join(__dirname, 'curriculum.js'), 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: 'curriculum.js' });
  const data = sandbox.window.CURRICULUM;
  if (!data || typeof data !== 'object') {
    throw new Error('curriculum.js did not define window.CURRICULUM');
  }
  return data;
}

module.exports = loadCurriculum;
