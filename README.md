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

It's static. `index.html` is the **brand landing page**; `app.html` is the
**learning app**. Open either directly, or serve the folder:

```bash
python3 -m http.server 8000
# brand site:  http://localhost:8000
# the app:     http://localhost:8000/app.html
```

### Custom domain

The site is published at **apexacademy.co.ke**. The `CNAME` file at the repo
root sets this for GitHub Pages; on Netlify the domain is configured in the
dashboard. Either way, point the domain's DNS at your chosen host (see the
deploy notes below) — use only one host as the live target.

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
   (idempotent — `CREATE TABLE IF NOT EXISTS`), seeds the curriculum if the
   database is empty, then serves auth (`/api/signup`, `/api/login`,
   `/api/me`), progress (`/api/progress`), and the study-materials API
   (`/api/curriculum` — see below).
4. In the frontend, set `window.STUDY_JOURNAL_API_BASE` in `app.html`
   to the deployed API URL to enable login and cross-device sync.
5. To let a user edit the curriculum, set **`ADMIN_EMAILS`** (comma-separated)
   to their email, or set `is_admin = true` on their `users` row.

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
schema on boot. Run migrations manually anytime with `npm run db:migrate`,
and (re)load the curriculum into the database with `npm run db:seed`.

You can also trigger the workflow manually via the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

## Files

| File                         | Purpose                                                |
| ---------------------------- | ------------------------------------------------------ |
| `index.html`                 | Brand landing page (Story / Values / Vision / Curriculum) |
| `app.html`                   | The learning app: header, controls bar, tabs, five views |
| `apex-logo.svg`              | The Apex logo mark (also the favicon)                  |
| `CNAME`                      | Custom domain for GitHub Pages (apexacademy.co.ke)     |
| `styles.css`                 | All styling, including the print stylesheet            |
| `app.js`                     | Behaviour rules, view switching, storage, self-check   |
| `curriculum.js`              | The lesson content as plain data — the single source   |
| `curriculum-source.js`       | Loads `curriculum.js` in Node (for seeding)            |
| `materials.js`               | DB access for the curriculum (subjects/lessons/questions) |
| `seed.js`                    | Seeds the DB from `curriculum.js` (idempotent)         |
| `api.js`                     | Express API: auth, progress, and curriculum endpoints  |
| `schema.sql`                 | Postgres schema (users, progress, curriculum tables)   |
| `.github/workflows/pages.yml`| GitHub Pages deployment workflow                       |

## Behaviour (all client-side)

1. **Daily rotation** — Mon & Thu English, Tue & Fri Maths, Wed & Sat Science, Sun review.
2. **Next lesson** — first not-yet-completed in the day's subject (last as review when done).
3. **Review day** — picks the subject with the lowest completion ratio.
4. **Streak** — consecutive-day visits +1; a gap resets to 1.
5. **Storage** — completed lessons, streak, board, and tier saved to `localStorage`.
6. **Self-checking** — answers normalised (lower-cased; spaces, commas, `° £ $` stripped). Open exam-style questions reveal a mark scheme instead.

## Study materials API

The curriculum also lives in Postgres (tables `subjects`, `lessons`,
`questions`) and is served by the backend, so a native app, an alternate
frontend, or an admin editor can read and change it without redeploying.

The database is the mirror; **`curriculum.js` stays the source of truth**.
`npm run db:seed` (and an automatic seed-if-empty on boot) load it in, and
the seed is idempotent — re-running refreshes content by `(subject, unit)`
without creating duplicates or clobbering an empty database's later edits.

**Reads are public. Writes require an admin** (see step 5 of the Render
setup). All bodies and responses use the same camelCase lesson shape as
`curriculum.js`.

| Method & path                         | Auth   | Purpose                                  |
| ------------------------------------- | ------ | ---------------------------------------- |
| `GET /api/curriculum`                 | public | The whole tree (`{ ENG:[…], MAT:[…], SCI:[…] }`) |
| `GET /api/curriculum/:subject`        | public | One subject's lessons (`ENG`/`MAT`/`SCI`, case-insensitive) |
| `GET /api/curriculum/:subject/:unit`  | public | A single lesson                          |
| `POST /api/curriculum/:subject`       | admin  | Create a lesson (needs `unit`, `title`)  |
| `PUT /api/curriculum/:subject/:unit`  | admin  | Update a lesson in place                 |
| `DELETE /api/curriculum/:subject/:unit`| admin | Delete a lesson                          |

```bash
# Read (no auth)
curl https://your-api/api/curriculum/ENG/1

# Create (admin bearer token from /api/login)
curl -X POST https://your-api/api/curriculum/ENG \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"unit":14,"title":"New topic","summary":"…","questions":[]}'
```

> The frontend uses this automatically: when `window.STUDY_JOURNAL_API_BASE`
> is set, `app.js` renders the bundled `curriculum.js` instantly, then fetches
> `GET /api/curriculum` and swaps in the live database copy (so admin edits
> appear without redeploying). With no API base set — or if the API is
> unreachable or empty — it keeps the bundled content, so the static-only
> deploy still works offline.

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
and reload. No build step. If you run the backend, apply the same change
to its database with `npm run db:seed`. Alternatively, edit content
live through the admin curriculum API above.

## Limitations to be aware of

- Spec references are author-supplied as indicative; they should be
  audited against the live spec for each board.
- Combined Science (Trilogy) is implemented; Triple Award (Separate
  Biology/Chemistry/Physics) would extend it with more topics per
  subject.
- The self-checker performs string normalisation only — it does not
  understand equivalent algebraic forms. Open exam-style questions
  reveal a mark scheme/model answer for self-assessment instead.
