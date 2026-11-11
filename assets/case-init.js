/**
 * Immediate Case Flow Initialization Guard
 * Runs synchronously in <head> to prevent layout whiplash on desktop viewports.
 */
(function () {
  try {
    var isMobile = window.innerWidth < 768;
    var pref = localStorage.getItem('case_view_preference');
    if (!isMobile && pref !== 'reading') {
      document.documentElement.classList.add('is-whiteboard-active', 'is-whiteboard-loading');
      // Safety timeout: if bundle fails to load or takes longer than 4s, gracefully revert to reading mode
      setTimeout(function () {
        if (document.documentElement.classList.contains('is-whiteboard-loading')) {
          document.documentElement.classList.remove('is-whiteboard-active', 'is-whiteboard-loading');
        }
      }, 4000);
    }
  } catch (e) {}
})();
