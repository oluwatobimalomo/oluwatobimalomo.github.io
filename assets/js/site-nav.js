(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-navigation');
  if (!toggle || !menu) return;
  const desktop = window.matchMedia('(min-width: 701px)');

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    menu.hidden = !desktop.matches && !open;
  };

  setOpen(false);

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
      toggle.focus();
    }
  });

  desktop.addEventListener('change', () => setOpen(false));
})();
