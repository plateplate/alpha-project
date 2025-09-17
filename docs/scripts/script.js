// Tiny interaction + console logs
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready: developer tools initialized');
  const btn = document.getElementById('btnClicky');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('theme-alt');
      console.log('Toggled theme-alt on <body>');
    });
  }
});
