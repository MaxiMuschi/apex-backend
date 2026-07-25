// Study-materials data-access (PostgreSQL via pg). Factory takes a db
// dependency ({ query }) so the HTTP tests can inject an in-memory Postgres.
//
// The three tables (subjects, lessons, questions) are assembled in JS back
// into the nested browser shape (window.CURRICULUM): a map of subject id ->
// array of lessons, each lesson carrying its questions. We build the tree in
// code rather than with SQL json aggregation to stay portable across pg and
// pg-mem.
module.exports = function makeMaterials(db) {
  // Real pg returns jsonb already parsed; TEXT fallbacks hand back a string.
  function asJson(value, fallback) {
    if (value == null) return fallback;
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch (e) {
        return fallback;
      }
    }
    return value;
  }

  // DB row -> API/browser shape.
  function questionOut(row) {
    return {
      q: row.q,
      a: row.a,
      marks: row.marks,
      markscheme: row.markscheme,
      tier: row.tier,
      selfCheck: row.self_check === true,
    };
  }
  function lessonOut(row, questions) {
    const out = {
      unit: row.unit,
      title: row.title,
      summary: row.summary,
      tier: row.tier,
      specRef: asJson(row.spec_ref, {}),
      concept: row.concept,
      commandWords: asJson(row.command_words, []),
      examples: asJson(row.examples, []),
      questions: questions.map(questionOut),
    };
    const extended = asJson(row.extended, null);
    if (extended) out.extended = extended;
    return out;
  }

  // Normalise an incoming lesson payload (camelCase from clients) into the
  // column values we store. Missing fields fall back to sensible defaults.
  function lessonCols(body) {
    return {
      title: String(body.title),
      summary: body.summary != null ? String(body.summary) : '',
      tier: body.tier != null ? String(body.tier) : 'F',
      spec_ref: JSON.stringify(body.specRef && typeof body.specRef === 'object' ? body.specRef : {}),
      concept: body.concept != null ? String(body.concept) : '',
      command_words: JSON.stringify(Array.isArray(body.commandWords) ? body.commandWords : []),
      examples: JSON.stringify(Array.isArray(body.examples) ? body.examples : []),
      extended: body.extended && typeof body.extended === 'object' ? JSON.stringify(body.extended) : null,
    };
  }

  async function listSubjects() {
    const { rows } = await db.query(
      'SELECT id, name, position FROM subjects ORDER BY position, id'
    );
    return rows;
  }

  async function getTree() {
    const subjects = await listSubjects();
    const { rows: lessons } = await db.query(
      'SELECT * FROM lessons ORDER BY subject_id, position, unit'
    );
    const { rows: questions } = await db.query(
      'SELECT * FROM questions ORDER BY lesson_id, position, id'
    );
    const qByLesson = new Map();
    for (const q of questions) {
      if (!qByLesson.has(q.lesson_id)) qByLesson.set(q.lesson_id, []);
      qByLesson.get(q.lesson_id).push(q);
    }
    const tree = {};
    for (const s of subjects) tree[s.id] = [];
    for (const l of lessons) {
      if (!tree[l.subject_id]) tree[l.subject_id] = [];
      tree[l.subject_id].push(lessonOut(l, qByLesson.get(l.id) || []));
    }
    return tree;
  }

  async function getSubjectLessons(subjectId) {
    const { rows: subj } = await db.query('SELECT id FROM subjects WHERE id = $1', [subjectId]);
    if (!subj[0]) return null;
    const { rows: lessons } = await db.query(
      'SELECT * FROM lessons WHERE subject_id = $1 ORDER BY position, unit',
      [subjectId]
    );
    // Join to lessons by subject rather than passing an id array (portable
    // across pg and pg-mem, which is shaky on ANY($1) array parameters).
    const { rows: questions } = await db.query(
      `SELECT q.* FROM questions q
       JOIN lessons l ON q.lesson_id = l.id
       WHERE l.subject_id = $1
       ORDER BY q.lesson_id, q.position, q.id`,
      [subjectId]
    );
    const qByLesson = new Map();
    for (const q of questions) {
      if (!qByLesson.has(q.lesson_id)) qByLesson.set(q.lesson_id, []);
      qByLesson.get(q.lesson_id).push(q);
    }
    return lessons.map((l) => lessonOut(l, qByLesson.get(l.id) || []));
  }

  async function getLessonRow(subjectId, unit) {
    const { rows } = await db.query(
      'SELECT * FROM lessons WHERE subject_id = $1 AND unit = $2',
      [subjectId, unit]
    );
    return rows[0] || null;
  }

  async function getLesson(subjectId, unit) {
    const row = await getLessonRow(subjectId, unit);
    if (!row) return null;
    const { rows: questions } = await db.query(
      'SELECT * FROM questions WHERE lesson_id = $1 ORDER BY position, id',
      [row.id]
    );
    return lessonOut(row, questions);
  }

  // Replace all questions for a lesson from a payload array (delete + insert).
  async function replaceQuestions(lessonId, questions) {
    await db.query('DELETE FROM questions WHERE lesson_id = $1', [lessonId]);
    if (!Array.isArray(questions)) return;
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i] || {};
      await db.query(
        `INSERT INTO questions (lesson_id, position, q, a, marks, markscheme, tier, self_check)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
        [
          lessonId,
          i,
          String(q.q != null ? q.q : ''),
          String(q.a != null ? q.a : ''),
          Number.isFinite(q.marks) ? q.marks : 1,
          String(q.markscheme != null ? q.markscheme : ''),
          String(q.tier != null ? q.tier : 'F'),
          q.selfCheck !== false,
        ]
      );
    }
  }

  async function subjectExists(subjectId) {
    const { rows } = await db.query('SELECT id FROM subjects WHERE id = $1', [subjectId]);
    return !!rows[0];
  }

  // Create a lesson under an existing subject. Returns null if the subject is
  // unknown, throws on a duplicate (subject_id, unit) unique violation (23505).
  async function createLesson(subjectId, body) {
    if (!(await subjectExists(subjectId))) return { error: 'unknown subject' };
    const c = lessonCols(body);
    const position = Number.isFinite(body.position) ? body.position : body.unit;
    const { rows } = await db.query(
      `INSERT INTO lessons
         (subject_id, unit, title, summary, tier, spec_ref, concept, command_words, examples, extended, position)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
       RETURNING id`,
      [subjectId, body.unit, c.title, c.summary, c.tier, c.spec_ref, c.concept,
        c.command_words, c.examples, c.extended, position]
    );
    await replaceQuestions(rows[0].id, body.questions);
    return { lesson: await getLesson(subjectId, body.unit) };
  }

  // Update an existing lesson in place. Returns null if it doesn't exist.
  async function updateLesson(subjectId, unit, body) {
    const existing = await getLessonRow(subjectId, unit);
    if (!existing) return null;
    const c = lessonCols(body);
    const position = Number.isFinite(body.position) ? body.position : existing.position;
    await db.query(
      `UPDATE lessons SET
         title=$1, summary=$2, tier=$3, spec_ref=$4, concept=$5,
         command_words=$6, examples=$7, extended=$8, position=$9
       WHERE id=$10`,
      [c.title, c.summary, c.tier, c.spec_ref, c.concept, c.command_words,
        c.examples, c.extended, position, existing.id]
    );
    if (body.questions !== undefined) await replaceQuestions(existing.id, body.questions);
    return { lesson: await getLesson(subjectId, unit) };
  }

  // Idempotent create-or-update by (subject_id, unit). Used by the seeder so
  // re-running it refreshes content instead of erroring on duplicates.
  async function upsertLesson(subjectId, body) {
    const c = lessonCols(body);
    const position = Number.isFinite(body.position) ? body.position : body.unit;
    const { rows } = await db.query(
      `INSERT INTO lessons
         (subject_id, unit, title, summary, tier, spec_ref, concept, command_words, examples, extended, position)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
       ON CONFLICT (subject_id, unit) DO UPDATE SET
         title=EXCLUDED.title, summary=EXCLUDED.summary, tier=EXCLUDED.tier,
         spec_ref=EXCLUDED.spec_ref, concept=EXCLUDED.concept,
         command_words=EXCLUDED.command_words, examples=EXCLUDED.examples,
         extended=EXCLUDED.extended, position=EXCLUDED.position
       RETURNING id`,
      [subjectId, body.unit, c.title, c.summary, c.tier, c.spec_ref, c.concept,
        c.command_words, c.examples, c.extended, position]
    );
    await replaceQuestions(rows[0].id, body.questions);
    return rows[0].id;
  }

  async function deleteLesson(subjectId, unit) {
    const { rowCount } = await db.query(
      'DELETE FROM lessons WHERE subject_id = $1 AND unit = $2',
      [subjectId, unit]
    );
    return rowCount > 0;
  }

  // Upsert a subject (used by the seeder).
  async function upsertSubject(id, name, position) {
    await db.query(
      `INSERT INTO subjects (id, name, position) VALUES ($1,$2,$3)
       ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, position = EXCLUDED.position`,
      [id, name, position]
    );
  }

  async function isEmpty() {
    const { rows } = await db.query('SELECT 1 FROM lessons LIMIT 1');
    return rows.length === 0;
  }

  return {
    listSubjects,
    getTree,
    getSubjectLessons,
    getLesson,
    createLesson,
    updateLesson,
    upsertLesson,
    deleteLesson,
    upsertSubject,
    isEmpty,
  };
};
