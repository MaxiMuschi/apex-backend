# The Study Journal

A zero-backend, single-page self-study programme. It rotates through three
subjects across the week, serves one short lesson a day, lets the learner
self-check practice questions, tracks completion and a daily streak in the
browser, and prints any lesson as a clean A4 worksheet. No login, no server,
no database.

Built from the blueprint in `GCSE-Curriculum-Website-Guide.docx` and seeded
with the full 45-lesson Key Stage 3 curriculum (English, Maths, Science —
15 weekly topics each).

## Run it

It's static. Either open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Deploy by copying these files to any static host (GitHub Pages, Netlify, S3…).
There is nothing to build and nothing to configure.

## Files

| File             | Purpose                                                        |
| ---------------- | ------------------------------------------------------------- |
| `index.html`     | The single page: header, tab bar, and the five view containers |
| `styles.css`     | All styling, including the print stylesheet for worksheets      |
| `app.js`         | The six behaviour rules, view switching, storage, self-checking |
| `curriculum.js`  | The lesson content as plain data — edit this to change lessons  |

## The five views

- **Today** — the single lesson scheduled for today, plus a 7-day week strip.
- **Curriculum** — browse every topic for a subject as a grid of cards.
- **Lesson detail** — concept, two worked examples, five self-checked questions, mark complete, print.
- **Progress** — per-subject lessons done / total, percent, a bar, and a reset control.
- **How It Works** — the method, for first-time users and parents.

## The six rules (all client-side)

1. **Daily rotation** — Mon & Thu English, Tue & Fri Maths, Wed & Sat Science, Sunday review.
2. **Next lesson** — the first lesson not yet completed in the day's subject (last one as review when all are done).
3. **Review day** — suggests the next lesson from whichever subject has the fewest completions.
4. **Streak** — consecutive-day visits increment the streak; a gap resets it to one.
5. **Storage** — completed lessons, streak and last-visit date are saved to `localStorage` as JSON.
6. **Self-checking** — answers are normalised (lower-cased; spaces, commas and `° £ $` removed) and compared; a miss reveals the correct answer.

## The lesson data model

Every lesson is one object with six fields (`curriculum.js`):

```js
{
  week: 1,                       // ordering / scheduling index → code W01
  title: "Word classes",
  summary: "One-line description shown on cards.",
  concept: "The teaching content.",
  examples: ["Worked example 1", "Worked example 2"],
  questions: [{ q: "Question?", a: "answer" } /* …five */]
}
```

## Adapting to GCSE

This KS3 content is a structural template. To level up:

- Add `board`, `tier` and `specRef` fields per lesson, and a `markscheme`
  per question, then surface them in `renderLesson()`.
- Extend the generated lesson code (in `app.js`, `lessonCode()`) to encode
  board/tier, e.g. `AQA.MAT.H.U04`.
- Author at GCSE depth using exam command words, add 6-mark extended-response
  questions with model answers, and expand beyond 15 topics per subject.
