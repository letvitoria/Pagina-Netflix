document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  const navList = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (!menuBtn || !navList) return;

  // toggle open/close when hamburger clicked
  menuBtn.addEventListener('click', function () {
    // anima o botão para X
    menuBtn.classList.toggle('active');

    // mostra/esconde a lista de links (CSS espera .nav-list.show-menu)
    navList.classList.toggle('show-menu');

    // mantém compatibilidade caso algum CSS/JS use .nav.open
    if (nav) nav.classList.toggle('open');

    const expanded = menuBtn.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', String(expanded));
  });

  // close menu when a nav link is clicked (mobile behavior)
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (navList.classList.contains('show-menu') || (nav && nav.classList.contains('open'))) {
        navList.classList.remove('show-menu');
        if (nav) nav.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // fecha o menu ao clicar fora (melhora usabilidade no mobile)
  document.addEventListener('click', function (e) {
    const target = e.target;
    if (!menuBtn.contains(target) && !navList.contains(target)) {
      if (navList.classList.contains('show-menu')) {
        navList.classList.remove('show-menu');
        if (nav) nav.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // fecha o menu com a tecla Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (navList.classList.contains('show-menu')) {
        navList.classList.remove('show-menu');
        if (nav) nav.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });
});