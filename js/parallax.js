/* js/parallax.js — Grid parallax, applied to all pages
   Shifts body background-position-y at 50% of scroll speed so the grid
   drifts behind the content, creating a subtle depth layer.
   Disabled when prefers-reduced-motion is set.
*/
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var body = document.body;
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        body.style.backgroundPositionY = (window.scrollY * 0.5) + 'px';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();
