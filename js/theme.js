/* ==========================================================================
   PLACEMENTPREP - THEME CONTROLLER
   Dark mode default with persistent high-contrast Light mode
   ========================================================================== */

(function () {
  const THEME_KEY = 'placementPrep_theme';

  function getSavedTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    // Default to dark mode as requested by design system
    return 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    // Update any theme icons
    const icons = document.querySelectorAll('.theme-toggle-icon');
    icons.forEach(icon => {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  // Initialize immediately on load
  const initial = getSavedTheme();
  applyTheme(initial);

  // Expose globally
  window.ThemeManager = {
    getTheme: () => document.documentElement.getAttribute('data-theme') || 'dark',
    applyTheme,
    toggleTheme
  };
})();
