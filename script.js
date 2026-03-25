'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((drop) => {
    const btn = drop.querySelector('.dropbtn');
    if (!btn) return;

    btn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      drop.classList.toggle('open');

      dropdowns.forEach((other) => {
        if (other !== drop) other.classList.remove('open');
      });
    });
  });

  document.addEventListener('click', () => {
    dropdowns.forEach((drop) => drop.classList.remove('open'));
  });

  const searchInput = document.getElementById('page-search');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const contentItems = document.querySelectorAll('.searchable');

      contentItems.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }
});
