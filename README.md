# The Study Journal — GCSE

A zero-backend, single-page self-study programme for GCSE. It rotates
through three subjects across the week, serves one short lesson a day,
lets you self-check exam-style practice questions, tracks completion
and a daily streak in your browser, and prints any lesson as a clean
A4 worksheet. No login, no server, no database.

Built from the blueprint in `GCSE-Curriculum-Website-Guide.docx` and
authored to GCSE depth with exam-board and tier support.

## What's in it

- **GCSE English Language** — 13 topics (untiered)
- **GCSE Mathematics** — 16 topics (Foundation + Higher)
- **GCSE Combined Science: Trilogy** — 15 topics (Foundation + Higher), Biology / Chemistry / Physics
- **264 practice questions** with mark schemes
- **23 six-mark extended responses** with model answers and level descriptors
- **Three exam boards supported** — AQA, Edexcel, OCR — with indicative spec references per topic

> Spec references are indicative and should be checked against your board's current official specification before relying on them for revision planning.

## Run it

It's static. Either open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

### Frontend (GitHub Pages)

A GitHub Actions workflow (`.github/workflows/pages.yml`) deploys the
static site to GitHub Pages on every push to `main`.

**First-time setup:**
1. Push this repository to GitHub on `main`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Re-run the workflow (or push again). The deployed URL appears on the workflow run.

### API (Render Blueprint)

`render.yaml` provisions the Node web service **and** a managed Postgres,
wiring `DATABASE_URL` automatically and generating `JWT_SECRET`.

1. In Render → **New → Blueprint**, pick this repo. It creates
   `study-journal-api` and `study-journal-db`.
2. Set **`CORS_ORIGIN`** on the service to your frontend origin
   (e.g. `https://maximuschi.github.io`) to lock CORS down. Defaults to `*`.
3. The service runs `node server.js`, which applies `schema.sql` on boot
   (idempotent — `CREATE TABLE IF NOT EXISTS`), then serves on `/health`,
   `/api/signup`, `/api/login`, `/api/me`, and `/api/progress`.
4. In the frontend, set `window.STUDY_JOURNAL_API_BASE` in `index.html`
   to the deployed API URL to enable login and cross-device sync.

### API (Docker — Railway, Fly, Cloud Run, …)

A `Dockerfile` is included for any container host:

```bash
docker build -t study-journal-api .
docker run -p 3000:3000 \
  -e DATABASE_URL=postgres://… \
  -e JWT_SECRET=$(openssl rand -hex 32) \
  study-journal-api
```

Provide your own Postgres (Neon/Supabase/RDS/…). The container applies the
schema on boot. Run migrations manually anytime with `npm run db:migrate`.

You can also trigger the workflow manually via the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

## Files

| File                         | Purpose                                                |
| ---------------------------- | ------------------------------------------------------ |
| `index.html`                 | Single page: header, controls bar, tabs, five views    |
| `styles.css`                 | All styling, including the print stylesheet            |
| `app.js`                     | Behaviour rules, view switching, storage, self-check   |
| `curriculum.js`              | The lesson content as plain data — edit here           |
| `.github/workflows/pages.yml`| GitHub Pages deployment workflow                       |

## Behaviour (all client-side)

1. **Daily rotation** — Mon & Thu English, Tue & Fri Maths, Wed & Sat Science, Sun review.
2. **Next lesson** — first not-yet-completed in the day's subject (last as review when done).
3. **Review day** — picks the subject with the lowest completion ratio.
4. **Streak** — consecutive-day visits +1; a gap resets to 1.
5. **Storage** — completed lessons, streak, board, and tier saved to `localStorage`.
6. **Self-checking** — answers normalised (lower-cased; spaces, commas, `° £ $` stripped). Open exam-style questions reveal a mark scheme instead.

## Lesson data model

Each lesson:

```js
{
  unit: 1,
  title: "Atomic structure & the periodic table",
  summary: "Sub-atomic particles, electron configuration, group trends.",
  tier: "F",                                  // "H" = Higher-only topic
  specRef: { AQA: "5.1", Edexcel: "1.1.1", OCR: "C2.1a" },
  concept: "...",                             // 120-220 words, GCSE depth
  commandWords: ["describe", "explain"],
  examples: ["worked example 1", "worked example 2"],
  questions: [
    {
      q: "...", a: "47",                      // short canonical answer
      marks: 2, markscheme: "M1 ... A1 ...",
      tier: "F", selfCheck: true              // false = open, no auto-check
    }
    // …5–6 per lesson
  ],
  extended: {                                 // optional 6-mark question
    q: "...", marks: 6, model: "...", levels: "Level 3 (5–6 marks): ..."
  }
}
```

## Adding to the curriculum

Edit `curriculum.js`. The file is plain data — JSON inside a single
`window.CURRICULUM = ...;` assignment. Add a new lesson object to the
right subject array, give it a fresh `unit` number, fill the fields,
and reload. No build step.

## Limitations to be aware of

- Spec references are author-supplied as indicative; they should be
  audited against the live spec for each board.
- Combined Science (Trilogy) is implemented; Triple Award (Separate
  Biology/Chemistry/Physics) would extend it with more topics per
  subject.
- The self-checker performs string normalisation only — it does not
  understand equivalent algebraic forms. Open exam-style questions
  reveal a mark scheme/model answer for self-assessment instead.
