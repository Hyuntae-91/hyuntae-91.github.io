// Taxonomy filter for /categories/ page
(function () {
  function filter() {
    var hash = window.location.hash.slice(1).toLowerCase(); // current category slug
    var sections = document.querySelectorAll('.taxonomy__section');

    // If no hash → show everything
    if (!hash) {
      sections.forEach(function (sec) {
        sec.style.display = '';
      });
      return;
    }

    sections.forEach(function (sec) {
      if (sec.id.toLowerCase() === hash) {
        sec.style.display = '';
      } else {
        sec.style.display = 'none';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', filter);
  window.addEventListener('hashchange', filter);
})(); 