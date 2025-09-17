// Tiny interaction + console logs
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready: new pink layout loaded');
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('theme-alt');
      console.log('Theme toggled:', document.body.classList.contains('theme-alt') ? 'alt' : 'default');
    });
  }
});
