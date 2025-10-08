document.getElementById('menu-toggle')?.addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    panel.classList.toggle('hidden');
  });
});