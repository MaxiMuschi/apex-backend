// seed.js — load the curriculum from curriculum.js and write it into the
// database. Idempotent: subjects and lessons upsert by their natural keys, and
// each lesson's questions are replaced, so re-running refreshes content
// without creating duplicates.
//
//   node -e "require('./seed')(require('./db')).then(()=>process.exit(0))"
//   npm run db:seed
const makeMaterials = require('./materials');
const loadCurriculum = require('./curriculum-source');

// Human-readable names for the subject codes used in curriculum.js.
const SUBJECT_NAMES = {
  ENG: 'English Language',
  MAT: 'Mathematics',
  SCI: 'Combined Science: Trilogy',
};

async function seed(db, { log = () => {} } = {}) {
  const materials = makeMaterials(db);
  const curriculum = loadCurriculum();

  let subjectCount = 0;
  let lessonCount = 0;
  const subjectIds = Object.keys(curriculum);
  for (let s = 0; s < subjectIds.length; s++) {
    const subjectId = subjectIds[s];
    const name = SUBJECT_NAMES[subjectId] || subjectId;
    await materials.upsertSubject(subjectId, name, s);
    subjectCount++;

    const lessons = curriculum[subjectId] || [];
    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      // Preserve authored order via `position`, keep `unit` as the key.
      await materials.upsertLesson(subjectId, { ...lesson, position: i });
      lessonCount++;
    }
    log(`  ${subjectId}: ${lessons.length} lessons`);
  }
  log(`Seeded ${subjectCount} subjects, ${lessonCount} lessons.`);
  return { subjects: subjectCount, lessons: lessonCount };
}

// Seed only when there is no material yet — safe to call on every boot so a
// fresh deploy ships with content, without clobbering later admin edits.
async function seedIfEmpty(db, opts) {
  const materials = makeMaterials(db);
  if (await materials.isEmpty()) {
    return seed(db, opts);
  }
  return null;
}

module.exports = seed;
module.exports.seed = seed;
module.exports.seedIfEmpty = seedIfEmpty;
