/* site.js — Apex brand site interactions.
   Loaded with `defer`; runs under a strict CSP (script-src 'self').
   No inline handlers anywhere. */
(function () {
  "use strict";

  /* ============================================================
     EDIT ME — social + analytics config
     Update these when your profiles/analytics are live. Leave a social
     link as "#" to show the icon as "coming soon" (non-clickable).
     ============================================================ */
  var CONFIG = {
    social: {
      instagram: "#",
      tiktok: "#",
      x: "#",
      facebook: "#"
    },
    // Drop in an analytics ID later (e.g. a Plausible domain or GA4 id).
    // A third-party analytics script also needs its domain added to
    // script-src / connect-src in _headers.
    analyticsId: ""
  };
  window.APEX_CONFIG = CONFIG;

  var LABELS = { instagram: "Instagram", tiktok: "TikTok", x: "X", facebook: "Facebook" };
  var ORDER = ["instagram", "tiktok", "x", "facebook"];
  var ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.31 2.02 1.46 3.6 3.5 3.86v2.4c-1.3.03-2.5-.37-3.5-1.03v5.9A5.13 5.13 0 1 1 11.37 9c.27 0 .53.02.79.06v2.51a2.66 2.66 0 1 0 1.84 2.53V3h2.5Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.24 2H21.5l-7.5 8.57L22.5 22h-6.8l-4.77-6.23L5.4 22H2.14l7.98-9.12L1.5 2h6.96l4.32 5.72L18.24 2Zm-1.19 18h1.83L7.03 3.9H5.06L17.05 20Z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>'
  };

  function renderSocial() {
    var holders = document.querySelectorAll("[data-social]");
    if (!holders.length) return;
    var html = "";
    ORDER.forEach(function (k) {
      var url = CONFIG.social[k] || "#";
      var soon = url === "#";
      html += '<a class="social-link' + (soon ? " soon" : "") + '" href="' + url + '" ' +
        (soon
          ? 'aria-disabled="true" title="' + LABELS[k] + ' — coming soon"'
          : 'target="_blank" rel="noopener noreferrer"') +
        ' aria-label="' + LABELS[k] + (soon ? " (coming soon)" : "") + '" data-platform="' + k + '">' +
        ICONS[k] + "</a>";
    });
    holders.forEach(function (h) { h.innerHTML = html; });
  }

  function initNav() {
    var toggle = document.getElementById("nav-toggle");
    var menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;
    function close() {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
    function open() {
      menu.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
    }
    toggle.addEventListener("click", function () { menu.hidden ? open() : close(); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) close(); });
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  function initCurriculum() {
    var SUBJ = { ENG: "English Language", MAT: "Mathematics", SCI: "Combined Science" };
    var SORD = ["ENG", "MAT", "SCI"];
    var btn = document.getElementById("reveal-curriculum");
    var box = document.getElementById("curriculum-content");
    if (!btn || !box) return;
    var rendered = false;

    function esc(s) {
      var d = document.createElement("div");
      d.textContent = s == null ? "" : String(s);
      return d.innerHTML;
    }
    function render() {
      var C = window.CURRICULUM || {};
      var html = "";
      SORD.forEach(function (sid) {
        var lessons = C[sid] || [];
        if (!lessons.length) return;
        html += '<div class="cur-subject reveal"><div class="cur-subject-head"><h3>' +
          esc(SUBJ[sid] || sid) + '</h3><span class="cur-count">' + lessons.length +
          ' modules</span></div><div class="cur-grid">';
        lessons.forEach(function (l) {
          var qn = (l.questions && l.questions.length) || 0;
          var higher = l.tier === "H" ? '<span class="cur-h">Higher</span>' : "";
          html += '<div class="cur-mod"><div class="cur-mod-top"><span class="cur-unit">Unit ' +
            esc(l.unit) + '</span>' + higher + '</div><div class="cur-title">' + esc(l.title) +
            '</div><div class="cur-sum">' + esc(l.summary || "") + '</div><div class="cur-meta">' +
            qn + ' practice questions</div></div>';
        });
        html += "</div></div>";
      });
      if (!html) {
        html = '<p style="text-align:center;color:var(--ink-soft)">The curriculum will appear here. ' +
          '<a href="app.html" style="color:var(--turq-deep);font-weight:600">Open the classroom</a> to explore it.</p>';
      }
      box.innerHTML = html;
      rendered = true;
      initReveal(); // animate the freshly-inserted subject blocks
    }
    btn.addEventListener("click", function () {
      if (box.hidden === false) {
        box.hidden = true;
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Reveal all modules →";
        return;
      }
      if (!rendered) render();
      box.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      btn.textContent = "Hide modules";
    });
  }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initReveal() {
    var els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || reduceMotion) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  function initTilt() {
    if (reduceMotion) return;
    var scene = document.querySelector("[data-tilt]");
    if (!scene) return;
    scene.addEventListener("pointermove", function (e) {
      var r = scene.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      scene.style.setProperty("--ry", (x * 10).toFixed(2) + "deg");
      scene.style.setProperty("--rx", (y * -8).toFixed(2) + "deg");
    });
    scene.addEventListener("pointerleave", function () {
      scene.style.setProperty("--rx", "0deg");
      scene.style.setProperty("--ry", "0deg");
    });
  }

  function initPricing() {
    var host = document.querySelector("[data-pricing]");
    var plans = window.APEX_PLANS;
    if (!host || !plans) return;
    var sym = plans.symbol, per = plans.cadence;
    host.innerHTML = plans.tiers.map(function (p) {
      var feats = p.features.map(function (f) {
        return '<li><span class="tick" aria-hidden="true">✓</span><span>' + f + "</span></li>";
      }).join("");
      var btnClass = p.popular ? "btn btn-primary" : "btn btn-ghost";
      return '<div class="plan' + (p.popular ? " popular" : "") + '">' +
        '<div class="plan-name">' + p.name + "</div>" +
        '<div class="plan-tag">' + (p.tagline || "") + "</div>" +
        '<div class="plan-price"><span class="cur">' + sym + "</span>" + p.price +
          '<span class="per"> /' + per + "</span></div>" +
        '<ul class="plan-feats">' + feats + "</ul>" +
        '<a class="' + btnClass + '" href="app.html?plan=' + p.id + '">Choose ' + p.name + "</a>" +
        "</div>";
    }).join("");
  }

  function initAnalytics() {
    if (!CONFIG.analyticsId) return; // not configured yet — no-op
    // Later: inject your privacy-first analytics here, and whitelist its
    // domain in _headers (script-src / connect-src).
  }

  function boot() {
    renderSocial();
    initNav();
    initCurriculum();
    initPricing();
    initReveal();
    initTilt();
    initAnalytics();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
