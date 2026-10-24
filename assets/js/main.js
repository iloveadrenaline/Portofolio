/* main.js - Application initialization */

(function () {
  'use strict';

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    wireProjectHoverInteractions();
    wireTechScroller();
    wirePfpEffects();
    wireCommandPalette();
    wireCursorGrab();
    wireShowMoreSocials();
    wireWebringToggle();
    wireKoFiWidget();
    wireCopyEmail();
    wireSecretDashboard();
  });

  // Remove preload class on window load
  window.addEventListener('load', () => {
    document.documentElement.classList.remove('preload');
  });

})();