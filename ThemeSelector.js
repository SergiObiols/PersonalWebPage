const root    = document.documentElement;
const buttons = document.querySelectorAll('.theme-btn');

function applyTheme(theme) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark      = theme === 'dark' || (theme === 'system' && prefersDark);

  root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', theme);

  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
}

// Aplicar tema guardado al cargar
applyTheme(localStorage.getItem('theme') || 'system');

// Clicks en los botones
buttons.forEach(btn => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
});

// Reaccionar a cambios en la preferencia del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (localStorage.getItem('theme') === 'system') applyTheme('system');
});