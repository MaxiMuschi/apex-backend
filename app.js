/* app.js — The Study Journal.
   Six small rules drive everything; none need a server (see Part 5 of the guide).
   State lives in localStorage as JSON. */

(function () {
  "use strict";

  // ---- Subjects ----------------------------------------------------------
  var SUBJECTS = [
    { id: "ENG", name: "English", short: "Eng", tag: "tag-eng", dot: "dot-eng", bar: "bar-eng" },
    { id: "MAT", name: "Mathematics", short: "Maths", tag: "tag-mat", dot: "dot-mat", bar: "bar-mat" },
    { id: "SCI", name: "Science", short: "Sci", tag: "tag-sci", dot: "dot-sci", bar: "bar-sci" }
  ];
  function subject(id) { return SUBJECTS.filter(function (s) { return s.id === id; })[0]; }

  var CURRICULUM = window.CURRICULUM || {};

  // Rule 1 — Daily subject rotation. getDay(): 0=Sun ... 6=Sat.
  // Mon&Thu English, Tue&Fri Maths, Wed&Sat Science, Sun review.
  var WEEK_PLAN = { 1: "ENG", 4: "ENG", 2: "MAT", 5: "MAT", 3: "SCI", 6: "SCI", 0: "REVIEW" };
  var DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var STORAGE_KEY = "study-journal-v1";

  // ---- State / storage (Rule 5) -----------------------------------------
  var state = loadState();

  function defaultState() {
    return { completed: { ENG: [], MAT: [], SCI: [] }, streak: 0, lastVisit: null };
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
      return s;
    } catch (e) { return defaultState(); }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function isDone(subjId, week) { return state.completed[subjId].indexOf(week) !== -1; }
  function markDone(subjId, week) {
    if (!isDone(subjId, week)) { state.completed[subjId].push(week); save(); }
  }
  function completedCount(subjId) { return state.completed[subjId].length; }

  // ---- Dates -------------------------------------------------------------
  function dateKey(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }

  // Rule 4 — Streak tracking. Run once per load.
  function updateStreak() {
    var today = new Date();
    var todayKey = dateKey(today);
    if (state.lastVisit === todayKey) return; // already counted today
    var yKey = dateKey(addDays(today, -1));
    if (state.lastVisit === yKey) state.streak += 1; // consecutive day
    else state.streak = 1;                            // first visit or a gap
    state.lastVisit = todayKey;
    save();
  }

  // ---- Lesson code & selection ------------------------------------------
  function lessonCode(subjId, week) { return subjId + ".W" + pad(week); }

  // Rule 2 — first not-yet-completed lesson; if all done, the last as review.
  function nextLesson(subjId) {
    var lessons = CURRICULUM[subjId] || [];
    for (var i = 0; i < lessons.length; i++) {
      if (!isDone(subjId, lessons[i].week)) return lessons[i];
    }
    return lessons[lessons.length - 1] || null;
  }

  // Rule 3 — on review day, the subject with the fewest completed lessons.
  function leastProgressedSubject() {
    var best = SUBJECTS[0].id, bestN = Infinity;
    SUBJECTS.forEach(function (s) {
      var n = completedCount(s.id);
      if (n < bestN) { bestN = n; best = s.id; }
    });
    return best;
  }

  function todaysPlan() {
    var planId = WEEK_PLAN[new Date().getDay()];
    if (planId === "REVIEW") {
      return { review: true, subjId: leastProgressedSubject() };
    }
    return { review: false, subjId: planId };
  }

  // ---- Self-check normalisation (Rule 6) --------------------------------
  function normalise(s) {
    return String(s).toLowerCase().replace(/[\s,°£$]/g, "");
  }
  function answerMatches(given, expected) {
    return normalise(given) === normalise(expected) && normalise(given) !== "";
  }

  // ---- View switching (Step 4) ------------------------------------------
  var VIEWS = ["today", "curriculum", "lesson", "progress", "how"];
  function showView(name) {
    VIEWS.forEach(function (v) {
      var el = document.getElementById("view-" + v);
      if (el) el.hidden = v !== name;
    });
    // Lesson is a sub-view, not a tab. Highlight the owning tab otherwise.
    document.querySelectorAll(".tab").forEach(function (t) {
      var on = t.getAttribute("data-view") === name;
      if (on) t.setAttribute("aria-current", "page");
      else t.removeAttribute("aria-current");
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- Renderers ---------------------------------------------------------
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

  function renderStreak() {
    document.getElementById("streak-count").textContent = state.streak;
    document.getElementById("streak").classList.toggle("cold", state.streak === 0);
  }

  function renderToday() {
    var plan = todaysPlan();
    var subj = subject(plan.subjId);
    var lesson = nextLesson(plan.subjId);
    var now = new Date();
    var dateStr = now.toLocaleDateString(undefined, {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
    document.getElementById("today-date").textContent = dateStr;

    var card = document.getElementById("today-card");
    card.className = "today-card" + (plan.review ? " review-day" : "");
    card.innerHTML = "";

    if (!lesson) {
      card.appendChild(el("p", null, "No lessons available for this subject yet."));
      return;
    }

    if (plan.review) {
      card.appendChild(el("p", "review-note", "&#128260; Review day &mdash; topping up your least-practised subject."));
    }
    var tagRow = el("div");
    var tag = el("span", "subject-tag " + subj.tag, subj.name);
    tagRow.appendChild(tag);
    tagRow.appendChild(el("span", "lesson-code", lessonCode(subj.id, lesson.week)));
    card.appendChild(tagRow);

    card.appendChild(el("h3", null, "Week " + lesson.week + " &mdash; " + escapeHtml(lesson.title)));
    card.appendChild(el("p", "today-summary", escapeHtml(lesson.summary)));

    var actions = el("div", "today-actions");
    var start = el("button", "btn btn-primary", isDone(subj.id, lesson.week) ? "Review lesson" : "Start lesson");
    start.addEventListener("click", function () { openLesson(subj.id, lesson.week); });
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
    // Render Mon..Sun for a tidy week order.
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
    var grid = document.getElementById("lesson-grid");
    grid.innerHTML = "";
    (CURRICULUM[activeSubject] || []).forEach(function (lesson) {
      var done = isDone(activeSubject, lesson.week);
      var card = el("button", "lesson-card" + (done ? " done" : ""));
      card.setAttribute("aria-label",
        "Week " + lesson.week + " " + lesson.title + (done ? " (done)" : ""));
      if (done) card.appendChild(el("span", "done-stamp", "DONE"));
      card.appendChild(el("div", "lc-code", lessonCode(activeSubject, lesson.week)));
      card.appendChild(el("div", "lc-title", escapeHtml(lesson.title)));
      card.appendChild(el("div", "lc-meta",
        "Week " + lesson.week + " &middot; " + lesson.questions.length + " questions"));
      card.addEventListener("click", function () { openLesson(activeSubject, lesson.week); });
      grid.appendChild(card);
    });
  }

  function findLesson(subjId, week) {
    return (CURRICULUM[subjId] || []).filter(function (l) { return l.week === week; })[0];
  }

  function renderLesson(subjId, week) {
    var lesson = findLesson(subjId, week);
    var subj = subject(subjId);
    var host = document.getElementById("lesson-detail");
    host.innerHTML = "";
    if (!lesson) { host.appendChild(el("p", null, "Lesson not found.")); return; }

    var head = el("div", "lesson-head");
    var back = el("button", "btn", "&larr; Back");
    back.addEventListener("click", function () { openCurriculum(subjId); });
    head.appendChild(back);
    host.appendChild(head);

    if (isDone(subjId, week)) {
      host.appendChild(el("div", "complete-banner", "&#10003; You&rsquo;ve completed this lesson."));
    }

    var tagRow = el("div");
    tagRow.appendChild(el("span", "subject-tag " + subj.tag, subj.name));
    tagRow.appendChild(el("span", "lesson-code", lessonCode(subjId, week)));
    host.appendChild(tagRow);

    var h2 = el("h2", null, "Week " + week + " &mdash; " + escapeHtml(lesson.title));
    h2.id = "lesson-title";
    host.appendChild(h2);
    host.appendChild(el("p", "ld-summary", escapeHtml(lesson.summary)));

    // Concept
    var cBlock = el("div", "lesson-block");
    cBlock.appendChild(el("h3", null, "Concept"));
    cBlock.appendChild(el("div", "concept-text", "<p>" + escapeHtml(lesson.concept) + "</p>"));
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
    lesson.questions.forEach(function (item, i) {
      qBlock.appendChild(renderQuestion(item, i));
    });
    host.appendChild(qBlock);

    // Actions
    var actions = el("div", "lesson-actions");
    var done = el("button", "btn btn-primary", isDone(subjId, week) ? "Completed ✓" : "Mark complete");
    done.addEventListener("click", function () {
      markDone(subjId, week);
      renderStreak();
      renderLesson(subjId, week); // refresh banner/button
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
    wrap.appendChild(el("p", "q-text",
      '<span class="q-num">' + (i + 1) + ".</span>" + escapeHtml(item.q)));

    var row = el("div", "answer-row");
    var input = document.createElement("input");
    input.type = "text";
    input.setAttribute("aria-label", "Your answer to question " + (i + 1));
    input.placeholder = "Your answer";
    var check = el("button", "btn", "Check");
    row.appendChild(input);
    row.appendChild(check);
    wrap.appendChild(row);

    var feedback = el("p", "feedback");
    feedback.hidden = true;
    wrap.appendChild(feedback);

    function doCheck() {
      if (answerMatches(input.value, item.a)) {
        feedback.className = "feedback correct";
        feedback.innerHTML = "&#10003; Correct";
      } else {
        feedback.className = "feedback incorrect";
        feedback.innerHTML = "&#10007; Not quite. Answer: <span class='reveal'>" +
          escapeHtml(item.a) + "</span>";
      }
      feedback.hidden = false;
    }
    check.addEventListener("click", doCheck);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); doCheck(); }
    });
    return wrap;
  }

  function renderProgress() {
    var grid = document.getElementById("progress-grid");
    grid.innerHTML = "";
    SUBJECTS.forEach(function (s) {
      var total = (CURRICULUM[s.id] || []).length;
      var done = completedCount(s.id);
      var pct = total ? Math.round((done / total) * 100) : 0;
      var card = el("div", "progress-card");
      card.appendChild(el("h3", null, s.name));
      card.appendChild(el("div", "pc-count", done + " of " + total + " lessons"));
      card.appendChild(el("div", "pc-pct", pct + "%"));
      var bar = el("div", "bar");
      bar.innerHTML = '<span class="' + s.bar + '" style="width:' + pct + '%"></span>';
      card.appendChild(bar);
      grid.appendChild(card);
    });
  }

  // ---- Navigation helpers ------------------------------------------------
  function openLesson(subjId, week) {
    renderLesson(subjId, week);
    showView("lesson");
  }
  function openCurriculum(subjId) {
    if (subjId) activeSubject = subjId;
    renderCurriculum();
    showView("curriculum");
  }

  // ---- Wiring ------------------------------------------------------------
  function init() {
    updateStreak();
    renderStreak();

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
        state = defaultState();
        save();
        renderStreak();
        renderProgress();
        renderToday();
      }
    });

    renderToday();
    showView("today");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
