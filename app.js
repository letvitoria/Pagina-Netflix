document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (!menuBtn || !nav) return;

  // toggle open/close when hamburger clicked
  menuBtn.addEventListener('click', function () {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', String(expanded));
  });

  // close menu when a nav link is clicked (mobile behavior)
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});