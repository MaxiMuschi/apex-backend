/* Tiny render-blocking boot: mark that JS is active BEFORE first paint, so the
   scroll-reveal styles (which hide elements until they animate in) only apply
   when JS can un-hide them. Without JS, content stays fully visible. */
document.documentElement.classList.add("js");
