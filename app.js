/* app.js — The Study Journal (GCSE).
   Board- and tier-aware. All client-side. */

(function () {
  "use strict";

  // ---- Subjects ----------------------------------------------------------
  var SUBJECTS = [
    { id: "ENG", name: "English Language", short: "Eng", tiered: false,
      tag: "tag-eng", dot: "dot-eng", bar: "bar-eng" },
    { id: "MAT", name: "Mathematics", short: "Maths", tiered: true,
      tag: "tag-mat", dot: "dot-mat", bar: "bar-mat" },
    { id: "SCI", name: "Combined Science", short: "Sci", tiered: true,
      tag: "tag-sci", dot: "dot-sci", bar: "bar-sci" }
  ];
  function subject(id) { return SUBJECTS.filter(function (s) { return s.id === id; })[0]; }

  var BOARDS = ["AQA", "Edexcel", "OCR"];

  var CURRICULUM = window.CURRICULUM || {};

  // Rule 1 — daily rotation. 0=Sun .. 6=Sat.
  var WEEK_PLAN = { 1: "ENG", 4: "ENG", 2: "MAT", 5: "MAT", 3: "SCI", 6: "SCI", 0: "REVIEW" };
  var DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var STORAGE_KEY = "study-journal-v2"; // bumped — new model

  // ---- State / storage --------------------------------------------------
  var state = loadState();

  function defaultState() {
    return {
      completed: { ENG: [], MAT: [], SCI: [] },
      streak: 0,
      lastVisit: null,
      board: "AQA",
      tier: "Foundation"
    };
  }
  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var s = JSON.parse(raw);
      var d = defaultState();
      s.completed = s.completed || d.completed;
      ["ENG", "MAT", "SCI"].forEach(function (k) {
        if (!Array.isArray(s.completed[k])) s.completed[k] = [];
      });
      if (typeof s.streak !== "number") s.streak = 0;
      if (BOARDS.indexOf(s.board) === -1) s.board = d.board;
      if (s.tier !== "Foundation" && s.tier !== "Higher") s.tier = d.tier;
      return s;
    } catch (e) { return defaultState(); }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
    scheduleSync();
  }

  // ---- Cloud sync (optional; degrades to localStorage when logged out) --
  // Configure window.STUDY_JOURNAL_API_BASE to your deployed API URL.
  var API_BASE = (window.STUDY_JOURNAL_API_BASE || "").replace(/\/+$/, "");
  var AUTH_KEY = "study-journal-auth";
  var auth = loadAuth();           // { token, email } or null
  var syncTimer = null;

  function loadAuth() {
    try { return JSON.parse(localStorage.getItem(AUTH_KEY)) || null; }
    catch (e) { return null; }
  }
  function saveAuth(a) {
    auth = a;
    try {
      if (a) localStorage.setItem(AUTH_KEY, JSON.stringify(a));
      else localStorage.removeItem(AUTH_KEY);
    } catch (e) {}
  }
  function isAuthed() { return !!(auth && auth.token); }

  function apiFetch(path, opts) {
    opts = opts || {};
    var headers = opts.headers || {};
    headers["Content-Type"] = "application/json";
    if (isAuthed()) headers["Authorization"] = "Bearer " + auth.token;
    return fetch(API_BASE + path, {
      method: opts.method || "GET",
      headers: headers,
      body: opts.body ? JSON.stringify(opts.body) : undefined
    });
  }

  // Only these fields make up the synced progress state.
  function progressPayload() {
    return {
      completed: state.completed,
      streak: state.streak,
      lastVisit: state.lastVisit,
      board: state.board,
      tier: state.tier
    };
  }

  function scheduleSync() {
    if (!isAuthed()) return;
    if (syncTimer) clearTimeout(syncTimer);
    syncTimer = setTimeout(pushProgress, 800); // debounce bursts of changes
  }

  function pushProgress() {
    if (!isAuthed()) return;
    apiFetch("/api/progress", { method: "PUT", body: progressPayload() })
      .then(function (r) {
        if (r.status === 401) { saveAuth(null); renderAccount(); }
        else { setSyncStatus("Synced"); setHealth("ok", "Cloud sync online"); }
      })
      .catch(function () {
        setSyncStatus("Offline — saved locally");
        setHealth("down", "Cloud sync offline");
      });
  }

  // Union local + remote so neither device loses completions.
  function mergeProgress(local, remote) {
    if (!remote) return local;
    var completed = {};
    ["ENG", "MAT", "SCI"].forEach(function (k) {
      var seen = {};
      (local.completed[k] || []).concat(remote.completed && remote.completed[k] || [])
        .forEach(function (u) { seen[u] = true; });
      completed[k] = Object.keys(seen).map(Number).sort(function (a, b) { return a - b; });
    });
    return {
      completed: completed,
      streak: Math.max(local.streak || 0, remote.streak || 0),
      lastVisit: (local.lastVisit || "") > (remote.lastVisit || "")
        ? local.lastVisit : (remote.lastVisit || local.lastVisit),
      board: remote.board || local.board,
      tier: remote.tier || local.tier
    };
  }

  function pullAndMerge() {
    if (!isAuthed()) return;
    setSyncStatus("Syncing…");
    apiFetch("/api/progress")
      .then(function (r) {
        if (r.status === 401) { saveAuth(null); renderAccount(); return null; }
        return r.json();
      })
      .then(function (body) {
        if (!body) return;
        var merged = mergeProgress(state, body.progress);
        state.completed = merged.completed;
        state.streak = merged.streak;
        state.lastVisit = merged.lastVisit;
        state.board = merged.board;
        state.tier = merged.tier;
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
        renderControls();
        renderStreak();
        renderToday();
        renderProgress();
        setHealth("ok", "Cloud sync online");
        pushProgress();            // converge the server to the merged view
      })
      .catch(function () {
        setSyncStatus("Offline — saved locally");
        setHealth("down", "Cloud sync offline");
      });
  }

  function isDone(subjId, unit) { return state.completed[subjId].indexOf(unit) !== -1; }
  function markDone(subjId, unit) {
    if (!isDone(subjId, unit)) { state.completed[subjId].push(unit); save(); }
  }
  function completedCount(subjId) {
    var visible = visibleLessons(subjId).map(function (l) { return l.unit; });
    return state.completed[subjId].filter(function (u) {
      return visible.indexOf(u) !== -1;
    }).length;
  }

  // ---- Tier filtering ---------------------------------------------------
  // Foundation hides "H" lessons. English is untiered, so every lesson shows.
  function visibleLessons(subjId) {
    var s = subject(subjId);
    var all = CURRICULUM[subjId] || [];
    if (!s || !s.tiered) return all.slice();
    if (state.tier === "Higher") return all.slice();
    return all.filter(function (l) { return l.tier !== "H"; });
  }
  function visibleQuestions(lesson, subjId) {
    var s = subject(subjId);
    if (!s || !s.tiered) return lesson.questions;
    if (state.tier === "Higher") return lesson.questions;
    return lesson.questions.filter(function (q) { return q.tier !== "H"; });
  }
  function showExtended(subjId) {
    // Extended-response questions belong at the higher end. Show on Higher,
    // or on Foundation only for English (untiered).
    var s = subject(subjId);
    if (!s.tiered) return true;
    return state.tier === "Higher";
  }

  // ---- Dates -------------------------------------------------------------
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function dateKey(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }

  // Rule 4 — streak.
  function updateStreak() {
    var today = new Date();
    var todayKey = dateKey(today);
    if (state.lastVisit === todayKey) return;
    var yKey = dateKey(addDays(today, -1));
    state.streak = state.lastVisit === yKey ? state.streak + 1 : 1;
    state.lastVisit = todayKey;
    save();
  }

  // ---- Lesson code ------------------------------------------------------
  // GCSE-aware: BOARD.SUBJ.[F|H].U##
  function lessonCode(subjId, unit, lessonTier) {
    var s = subject(subjId);
    var parts = [state.board, subjId];
    if (s.tiered) {
      // For a tier-H lesson always show H; for a tier-F lesson use the user's tier letter.
      parts.push(lessonTier === "H" ? "H" : (state.tier === "Higher" ? "H" : "F"));
    }
    parts.push("U" + pad(unit));
    return parts.join(".");
  }

  // Rule 2 — next not-done lesson (within visible tier); else last as review.
  function nextLesson(subjId) {
    var lessons = visibleLessons(subjId);
    for (var i = 0; i < lessons.length; i++) {
      if (!isDone(subjId, lessons[i].unit)) return lessons[i];
    }
    return lessons[lessons.length - 1] || null;
  }

  // Rule 3 — review day picks the least-progressed subject.
  function leastProgressedSubject() {
    var best = SUBJECTS[0].id, bestPct = Infinity;
    SUBJECTS.forEach(function (s) {
      var total = visibleLessons(s.id).length || 1;
      var pct = completedCount(s.id) / total;
      if (pct < bestPct) { bestPct = pct; best = s.id; }
    });
    return best;
  }

  function todaysPlan() {
    var planId = WEEK_PLAN[new Date().getDay()];
    if (planId === "REVIEW") return { review: true, subjId: leastProgressedSubject() };
    return { review: false, subjId: planId };
  }

  // ---- Self-check (Rule 6) ----------------------------------------------
  function normalise(s) {
    return String(s).toLowerCase().replace(/[\s,°£$]/g, "");
  }
  function answerMatches(given, expected) {
    return normalise(given) === normalise(expected) && normalise(given) !== "";
  }

  // ---- DOM helpers ------------------------------------------------------
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---- View switching ---------------------------------------------------
  var VIEWS = ["today", "curriculum", "lesson", "progress", "how"];
  function showView(name) {
    VIEWS.forEach(function (v) {
      var node = document.getElementById("view-" + v);
      if (node) node.hidden = v !== name;
    });
    document.querySelectorAll(".tab").forEach(function (t) {
      var on = t.getAttribute("data-view") === name;
      if (on) t.setAttribute("aria-current", "page");
      else t.removeAttribute("aria-current");
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- Controls (board / tier) ------------------------------------------
  function renderControls() {
    var bs = document.getElementById("board-select");
    bs.innerHTML = "";
    BOARDS.forEach(function (b) {
      var o = document.createElement("option");
      o.value = b; o.textContent = b;
      if (b === state.board) o.selected = true;
      bs.appendChild(o);
    });
    document.getElementById("tier-select").value = state.tier;
    updateTierNote();
  }
  function updateTierNote() {
    var note = document.getElementById("tier-note");
    var tieredSubjs = SUBJECTS.filter(function (s) { return s.tiered; })
      .map(function (s) { return s.name; }).join(" and ");
    note.textContent = "Tier affects " + tieredSubjs + ". English Language is untiered.";
  }

  // ---- Account / sync UI ------------------------------------------------
  function setSyncStatus(msg) {
    var el = document.getElementById("sync-status");
    if (el) el.textContent = msg || "";
  }

  // Health indicator: is the API reachable at all?
  function setHealth(stateName, text) {
    var h = document.getElementById("health");
    if (!h) return;
    h.className = "health " + stateName;
    h.title = "API: " + (API_BASE || "(same origin)");
    var t = h.querySelector(".health-text");
    if (t) t.textContent = text;
  }
  function checkHealth() {
    setHealth("checking", "Checking…");
    fetch(API_BASE + "/health", { method: "GET" })
      .then(function (r) {
        if (r.ok) setHealth("ok", "Cloud sync online");
        else setHealth("down", "Cloud sync offline");
      })
      .catch(function () { setHealth("down", "Cloud sync offline"); });
  }

  function renderAccount() {
    var bar = document.getElementById("account-bar");
    if (!bar) return;
    bar.innerHTML = "";
    if (isAuthed()) {
      var who = el("span", "account-who",
        "Synced as <strong>" + escapeHtml(auth.email) + "</strong>");
      var status = el("span", "sync-status");
      status.id = "sync-status";
      var out = el("button", "btn btn-ghost", "Log out");
      out.addEventListener("click", doLogout);
      bar.appendChild(who);
      bar.appendChild(status);
      bar.appendChild(out);
      return;
    }
    // Logged-out: compact email/password form.
    var form = document.createElement("form");
    form.className = "account-form";
    form.innerHTML =
      '<span class="account-label">Save progress across devices:</span>' +
      '<input type="email" id="acct-email" placeholder="email" autocomplete="username" aria-label="Email" required>' +
      '<input type="password" id="acct-pass" placeholder="password (8+ chars)" autocomplete="current-password" aria-label="Password" required>' +
      '<button type="submit" class="btn btn-primary" id="acct-login">Log in</button>' +
      '<button type="button" class="btn" id="acct-signup">Sign up</button>' +
      '<span class="account-msg" id="acct-msg"></span>';
    form.addEventListener("submit", function (e) { e.preventDefault(); doAuth("login"); });
    bar.appendChild(form);
    document.getElementById("acct-signup").addEventListener("click", function () { doAuth("signup"); });
  }

  function acctMsg(msg, ok) {
    var m = document.getElementById("acct-msg");
    if (m) { m.textContent = msg || ""; m.className = "account-msg" + (ok ? " ok" : " err"); }
  }

  function doAuth(kind) {
    var email = (document.getElementById("acct-email") || {}).value || "";
    var password = (document.getElementById("acct-pass") || {}).value || "";
    if (!email || !password) { acctMsg("Enter an email and password.", false); return; }
    acctMsg(kind === "signup" ? "Creating account…" : "Logging in…", true);
    apiFetch("/api/" + kind, { method: "POST", body: { email: email, password: password } })
      .then(function (r) {
        return r.json().then(function (body) { return { status: r.status, body: body }; });
      })
      .then(function (res) {
        if (res.status === 200 || res.status === 201) {
          saveAuth({ token: res.body.token, email: res.body.user.email });
          renderAccount();
          pullAndMerge();
        } else {
          acctMsg(res.body && res.body.error ? res.body.error : "Something went wrong.", false);
        }
      })
      .catch(function () { acctMsg("Couldn't reach the server.", false); });
  }

  function doLogout() {
    saveAuth(null);
    renderAccount();
  }

  // ---- Renderers ---------------------------------------------------------
  function renderStreak() {
    document.getElementById("streak-count").textContent = state.streak;
    document.getElementById("streak").classList.toggle("cold", state.streak === 0);
  }

  function renderToday() {
    var plan = todaysPlan();
    var subj = subject(plan.subjId);
    var lesson = nextLesson(plan.subjId);
    var now = new Date();
    document.getElementById("today-date").textContent = now.toLocaleDateString(undefined, {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
    var card = document.getElementById("today-card");
    card.className = "today-card" + (plan.review ? " review-day" : "");
    card.innerHTML = "";
    if (!lesson) {
      card.appendChild(el("p", null, "No lessons available for this subject at this tier."));
      renderWeekStrip();
      return;
    }
    if (plan.review) {
      card.appendChild(el("p", "review-note",
        "&#128260; Review day &mdash; topping up your least-practised subject."));
    }
    var tagRow = el("div");
    tagRow.appendChild(el("span", "subject-tag " + subj.tag, subj.name));
    tagRow.appendChild(el("span", "lesson-code", lessonCode(subj.id, lesson.unit, lesson.tier)));
    if (lesson.tier === "H") tagRow.appendChild(el("span", "pill pill-higher", "Higher"));
    card.appendChild(tagRow);
    card.appendChild(el("h3", null, "Unit " + lesson.unit + " &mdash; " + escapeHtml(lesson.title)));
    card.appendChild(el("p", "today-summary", escapeHtml(lesson.summary)));
    var spec = lesson.specRef && lesson.specRef[state.board];
    if (spec) card.appendChild(el("p", "spec-ref",
      "Spec: <strong>" + escapeHtml(state.board) + " " + escapeHtml(spec) + "</strong>"));

    var actions = el("div", "today-actions");
    var start = el("button", "btn btn-primary",
      isDone(subj.id, lesson.unit) ? "Review lesson" : "Start lesson");
    start.addEventListener("click", function () { openLesson(subj.id, lesson.unit); });
    var pick = el("button", "btn", "Pick another");
    pick.addEventListener("click", function () { openCurriculum(subj.id); });
    actions.appendChild(start);
    actions.appendChild(pick);
    card.appendChild(actions);

    renderWeekStrip();
  }

  function renderWeekStrip() {
    var strip = document.getElementById("week-strip");
    strip.innerHTML = "";
    var todayDow = new Date().getDay();
    var order = [1, 2, 3, 4, 5, 6, 0];
    order.forEach(function (dow) {
      var planId = WEEK_PLAN[dow];
      var day = el("div", "week-day" + (dow === todayDow ? " is-today" : ""));
      day.appendChild(el("div", "dow", DOW[dow]));
      if (planId === "REVIEW") {
        day.appendChild(el("div", "subj", "Review"));
        day.appendChild(el("span", "dot dot-review"));
      } else {
        var s = subject(planId);
        day.appendChild(el("div", "subj", s.short));
        day.appendChild(el("span", "dot " + s.dot));
      }
      strip.appendChild(day);
    });
  }

  var activeSubject = "ENG";

  function renderSubjectSwitcher() {
    var box = document.getElementById("subject-switcher");
    box.innerHTML = "";
    SUBJECTS.forEach(function (s) {
      var b = el("button", "btn", s.name);
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", s.id === activeSubject ? "true" : "false");
      b.addEventListener("click", function () { activeSubject = s.id; renderCurriculum(); });
      box.appendChild(b);
    });
  }

  function renderCurriculum() {
    renderSubjectSwitcher();
    var s = subject(activeSubject);
    var lessons = visibleLessons(activeSubject);
    var meta = document.getElementById("subject-meta");
    var tierLabel = s.tiered ? state.tier + " tier" : "untiered";
    meta.textContent = state.board + " &middot; " + tierLabel + " &middot; " +
      lessons.length + " topics";
    meta.innerHTML = state.board + " &middot; " + tierLabel + " &middot; " +
      lessons.length + " topics";

    var grid = document.getElementById("lesson-grid");
    grid.innerHTML = "";
    lessons.forEach(function (lesson) {
      var done = isDone(activeSubject, lesson.unit);
      var card = el("button", "lesson-card" + (done ? " done" : ""));
      card.setAttribute("aria-label",
        "Unit " + lesson.unit + " " + lesson.title + (done ? " (done)" : ""));
      if (done) card.appendChild(el("span", "done-stamp", "DONE"));
      if (lesson.tier === "H") card.appendChild(el("span", "pill pill-higher pill-corner", "H"));
      card.appendChild(el("div", "lc-code",
        lessonCode(activeSubject, lesson.unit, lesson.tier)));
      card.appendChild(el("div", "lc-title", escapeHtml(lesson.title)));
      var specStr = lesson.specRef && lesson.specRef[state.board]
        ? " &middot; spec " + escapeHtml(lesson.specRef[state.board]) : "";
      var vqs = visibleQuestions(lesson, activeSubject).length;
      card.appendChild(el("div", "lc-meta",
        "Unit " + lesson.unit + " &middot; " + vqs + " questions" + specStr));
      card.addEventListener("click", function () { openLesson(activeSubject, lesson.unit); });
      grid.appendChild(card);
    });
    if (lessons.length === 0) {
      grid.appendChild(el("p", null,
        "No topics in this view. Try switching tier or board."));
    }
  }

  function findLesson(subjId, unit) {
    return (CURRICULUM[subjId] || []).filter(function (l) { return l.unit === unit; })[0];
  }

  function renderLesson(subjId, unit) {
    var lesson = findLesson(subjId, unit);
    var subj = subject(subjId);
    var host = document.getElementById("lesson-detail");
    host.innerHTML = "";
    if (!lesson) { host.appendChild(el("p", null, "Lesson not found.")); return; }

    var head = el("div", "lesson-head");
    var back = el("button", "btn", "&larr; Back");
    back.addEventListener("click", function () { openCurriculum(subjId); });
    head.appendChild(back);
    host.appendChild(head);

    if (isDone(subjId, unit)) {
      host.appendChild(el("div", "complete-banner", "&#10003; You&rsquo;ve completed this lesson."));
    }

    var tagRow = el("div");
    tagRow.appendChild(el("span", "subject-tag " + subj.tag, subj.name));
    tagRow.appendChild(el("span", "lesson-code", lessonCode(subjId, lesson.unit, lesson.tier)));
    if (lesson.tier === "H") tagRow.appendChild(el("span", "pill pill-higher", "Higher only"));
    host.appendChild(tagRow);

    var h2 = el("h2", null, "Unit " + lesson.unit + " &mdash; " + escapeHtml(lesson.title));
    h2.id = "lesson-title";
    host.appendChild(h2);
    host.appendChild(el("p", "ld-summary", escapeHtml(lesson.summary)));

    var spec = lesson.specRef && lesson.specRef[state.board];
    if (spec) {
      host.appendChild(el("p", "spec-ref",
        "Spec point: <strong>" + escapeHtml(state.board) + " " + escapeHtml(spec) + "</strong>"));
    }
    if (lesson.commandWords && lesson.commandWords.length) {
      var cwHTML = lesson.commandWords.map(function (w) {
        return '<span class="cmd">' + escapeHtml(w) + "</span>";
      }).join(" ");
      var cw = el("p", "cmd-words", "Command words: " + cwHTML);
      host.appendChild(cw);
    }

    // Concept
    var cBlock = el("div", "lesson-block");
    cBlock.appendChild(el("h3", null, "Concept"));
    cBlock.appendChild(el("div", "concept-text",
      "<p>" + escapeHtml(lesson.concept) + "</p>"));
    host.appendChild(cBlock);

    // Worked examples
    var eBlock = el("div", "lesson-block");
    eBlock.appendChild(el("h3", null, "Worked examples"));
    lesson.examples.forEach(function (ex, i) {
      var box = el("div", "example");
      box.innerHTML = '<span class="ex-label">Example ' + (i + 1) + ":</span>" + escapeHtml(ex);
      eBlock.appendChild(box);
    });
    host.appendChild(eBlock);

    // Practice questions (Rule 6)
    var qBlock = el("div", "lesson-block");
    qBlock.appendChild(el("h3", null, "Practice questions"));
    var qs = visibleQuestions(lesson, subjId);
    qs.forEach(function (item, i) { qBlock.appendChild(renderQuestion(item, i)); });
    if (qs.length === 0) qBlock.appendChild(el("p", null, "No questions at this tier."));
    host.appendChild(qBlock);

    // Extended response (6-mark)
    if (lesson.extended && showExtended(subjId)) {
      var xBlock = el("div", "lesson-block");
      xBlock.appendChild(el("h3", null, "Extended response (6 marks)"));
      xBlock.appendChild(renderExtended(lesson.extended));
      host.appendChild(xBlock);
    }

    // Actions
    var actions = el("div", "lesson-actions");
    var done = el("button", "btn btn-primary",
      isDone(subjId, unit) ? "Completed ✓" : "Mark complete");
    done.addEventListener("click", function () {
      markDone(subjId, unit);
      renderStreak();
      renderLesson(subjId, unit);
    });
    var print = el("button", "btn", "Print worksheet");
    print.addEventListener("click", function () { window.print(); });
    var pick = el("button", "btn", "Pick another");
    pick.addEventListener("click", function () { openCurriculum(subjId); });
    actions.appendChild(done);
    actions.appendChild(print);
    actions.appendChild(pick);
    host.appendChild(actions);
  }

  function renderQuestion(item, i) {
    var wrap = el("div", "question");
    var head = el("p", "q-text",
      '<span class="q-num">' + (i + 1) + ".</span>" + escapeHtml(item.q));
    wrap.appendChild(head);
    var meta = el("div", "q-meta");
    if (item.marks) meta.appendChild(el("span", "marks", "[" + item.marks + " marks]"));
    if (item.tier === "H") meta.appendChild(el("span", "pill pill-higher", "H"));
    wrap.appendChild(meta);

    if (item.selfCheck) {
      var row = el("div", "answer-row no-print");
      var input = document.createElement("input");
      input.type = "text";
      input.setAttribute("aria-label", "Your answer to question " + (i + 1));
      input.placeholder = "Your answer";
      var check = el("button", "btn", "Check");
      var ms = el("button", "btn btn-ghost", "Show mark scheme");
      row.appendChild(input);
      row.appendChild(check);
      row.appendChild(ms);
      wrap.appendChild(row);

      var feedback = el("p", "feedback");
      feedback.hidden = true;
      wrap.appendChild(feedback);
      var schemeBox = el("div", "markscheme");
      schemeBox.innerHTML = "<strong>Mark scheme:</strong> " + escapeHtml(item.markscheme || "");
      schemeBox.hidden = true;
      wrap.appendChild(schemeBox);

      function doCheck() {
        if (answerMatches(input.value, item.a)) {
          feedback.className = "feedback correct";
          feedback.innerHTML = "&#10003; Correct";
        } else {
          feedback.className = "feedback incorrect";
          feedback.innerHTML = "&#10007; Not quite. Answer: <span class='reveal'>" +
            escapeHtml(item.a) + "</span>";
          schemeBox.hidden = false;
        }
        feedback.hidden = false;
      }
      check.addEventListener("click", doCheck);
      ms.addEventListener("click", function () { schemeBox.hidden = !schemeBox.hidden; });
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); doCheck(); }
      });
    } else {
      // Open exam-style question: textarea + reveal mark scheme.
      var ta = document.createElement("textarea");
      ta.rows = 3;
      ta.className = "open-answer no-print";
      ta.placeholder = "Write your answer here, then check the mark scheme.";
      ta.setAttribute("aria-label", "Your answer to question " + (i + 1));
      wrap.appendChild(ta);
      var reveal = el("button", "btn btn-ghost no-print", "Reveal mark scheme");
      wrap.appendChild(reveal);
      var ms2 = el("div", "markscheme");
      ms2.innerHTML = "<strong>Mark scheme:</strong> " + escapeHtml(item.markscheme || "");
      if (item.a) ms2.innerHTML += "<br><strong>Indicative answer:</strong> " + escapeHtml(item.a);
      ms2.hidden = true;
      wrap.appendChild(ms2);
      reveal.addEventListener("click", function () { ms2.hidden = !ms2.hidden; });
    }
    return wrap;
  }

  function renderExtended(ext) {
    var wrap = el("div", "extended");
    wrap.appendChild(el("p", "q-text", "<strong>Question:</strong> " + escapeHtml(ext.q)));
    wrap.appendChild(el("div", "q-meta",
      '<span class="marks">[' + (ext.marks || 6) + " marks]</span>"));
    var ta = document.createElement("textarea");
    ta.rows = 8;
    ta.className = "open-answer no-print";
    ta.placeholder = "Plan your six points, then write your answer.";
    ta.setAttribute("aria-label", "Extended response");
    wrap.appendChild(ta);
    var reveal = el("button", "btn btn-ghost no-print", "Reveal model answer");
    wrap.appendChild(reveal);
    var model = el("div", "markscheme");
    var html = "";
    if (ext.levels) html += "<strong>Level descriptors:</strong> " + escapeHtml(ext.levels) + "<br>";
    if (ext.model) html += "<strong>Model answer:</strong> " + escapeHtml(ext.model);
    model.innerHTML = html;
    model.hidden = true;
    wrap.appendChild(model);
    reveal.addEventListener("click", function () { model.hidden = !model.hidden; });
    return wrap;
  }

  function renderProgress() {
    var grid = document.getElementById("progress-grid");
    grid.innerHTML = "";
    SUBJECTS.forEach(function (s) {
      var total = visibleLessons(s.id).length;
      var done = completedCount(s.id);
      var pct = total ? Math.round((done / total) * 100) : 0;
      var card = el("div", "progress-card");
      card.appendChild(el("h3", null, s.name));
      var tierBit = s.tiered ? " &middot; " + state.tier : " &middot; untiered";
      card.appendChild(el("div", "pc-count",
        done + " of " + total + " lessons &middot; " + state.board + tierBit));
      card.appendChild(el("div", "pc-pct", pct + "%"));
      var bar = el("div", "bar");
      bar.innerHTML = '<span class="' + s.bar + '" style="width:' + pct + '%"></span>';
      card.appendChild(bar);
      grid.appendChild(card);
    });
  }

  // ---- Navigation -------------------------------------------------------
  function openLesson(subjId, unit) {
    renderLesson(subjId, unit);
    showView("lesson");
  }
  function openCurriculum(subjId) {
    if (subjId) activeSubject = subjId;
    renderCurriculum();
    showView("curriculum");
  }

  // ---- Init -------------------------------------------------------------
  function init() {
    updateStreak();
    renderControls();
    renderStreak();
    renderAccount();
    checkHealth();                  // show whether the API is reachable
    if (isAuthed()) pullAndMerge(); // pull cloud progress and merge on load

    document.getElementById("board-select").addEventListener("change", function (e) {
      state.board = e.target.value; save();
      // Re-render whatever is showing.
      renderToday(); renderCurriculum(); renderProgress();
    });
    document.getElementById("tier-select").addEventListener("change", function (e) {
      state.tier = e.target.value; save();
      renderToday(); renderCurriculum(); renderProgress();
    });

    document.getElementById("tab-bar").addEventListener("click", function (e) {
      var btn = e.target.closest(".tab");
      if (!btn) return;
      var view = btn.getAttribute("data-view");
      if (view === "today") renderToday();
      if (view === "curriculum") renderCurriculum();
      if (view === "progress") renderProgress();
      showView(view);
    });

    document.getElementById("reset-all").addEventListener("click", function () {
      if (window.confirm("Reset all progress, streak and history? This cannot be undone.")) {
        var keepBoard = state.board, keepTier = state.tier;
        state = defaultState();
        state.board = keepBoard; state.tier = keepTier;
        save();
        renderStreak(); renderProgress(); renderToday();
      }
    });

    renderToday();
    showView("today");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
