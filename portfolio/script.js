// Theme persistence
(function manageTheme() {
  const rootElement = document.documentElement;
  const themeToggleButton = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    rootElement.setAttribute('data-theme', 'light');
  }
  themeToggleButton?.addEventListener('click', () => {
    const isLight = rootElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      rootElement.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    } else {
      rootElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
})();

// Smooth scroll for anchor links
(function smoothAnchors() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const id = anchor.getAttribute('href');
    if (!id || id === '#' || id.length === 1) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();

// Dynamic year
(function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();