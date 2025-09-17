
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready: scripts loaded');
  const btn = document.getElementById('btnClicky');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('theme-alt');
      console.log('Theme toggled');
    });
  }
});
