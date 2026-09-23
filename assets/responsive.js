// Responsive helpers for small-screen behaviors
(function () {
  const MOBILE_BREAKPOINT = 768;
  const debounce = (fn, wait = 120) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  function updateBodyClass() {
    if (window.innerWidth < MOBILE_BREAKPOINT) document.body.classList.add('is-mobile');
    else document.body.classList.remove('is-mobile');
  }

  function initNavToggle() {
    const toggles = document.querySelectorAll('.nav-toggle');
    toggles.forEach((btn) => {
      const targetSelector = btn.getAttribute('data-target') || '.nav-menu';
      const menu = document.querySelector(targetSelector);
      if (!menu) return;
      btn.addEventListener('click', () => menu.classList.toggle('open'));
    });
  }

  function init() {
    updateBodyClass();
    initNavToggle();
    window.addEventListener('resize', debounce(updateBodyClass, 120));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.responsiveHelpers = { init, MOBILE_BREAKPOINT };
})();
