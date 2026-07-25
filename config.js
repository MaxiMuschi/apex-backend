// App configuration (externalised so the site can run under a strict
// Content-Security-Policy of script-src 'self' — no inline scripts).
//
// Cloud sync & login: set this to your deployed API base URL
// (e.g. "https://your-api.onrender.com"). Leave empty to use the same
// origin as this page. When you set a cross-origin API here, also add its
// domain to connect-src in _headers, and set CORS_ORIGIN on the API to
// https://apexacademy.co.ke.
window.STUDY_JOURNAL_API_BASE = window.STUDY_JOURNAL_API_BASE || "";
