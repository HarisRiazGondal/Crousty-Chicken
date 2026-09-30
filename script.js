const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
    mobileNav.hidden = isOpen;
  });

  mobileNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Ouvrir le menu');
      mobileNav.hidden = true;
    }
  });
}

const menuFilterButtons = [...document.querySelectorAll('[data-menu-filter]')];
const menuItems = [...document.querySelectorAll('[data-menu-category]')];

function showMenuCategory(category) {
  menuFilterButtons.forEach((button) => {
    const active = button.dataset.menuFilter === category;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  menuItems.forEach((item) => {
    item.hidden = category !== 'all' && item.dataset.menuCategory !== category;
  });
}

menuFilterButtons.forEach((button) => {
  button.addEventListener('click', () => showMenuCategory(button.dataset.menuFilter));
});

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href="#menu"], a[href="#shakes"], a[href="#kreamys"]');
  if (!link) return;

  const category = {
    '#menu': 'all',
    '#shakes': 'shakes',
    '#kreamys': 'desserts',
  }[link.getAttribute('href')];
  showMenuCategory(category);
});
