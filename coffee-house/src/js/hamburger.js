const nav = document.querySelector('.navigation');
const hamburgerBtn = document.querySelector('.hamburger');

export const hamburgerMenuHandler = () => {
  hamburgerBtn.addEventListener('click', () => {
    nav.classList.contains('active') ? closesHamburgerMenu() : openHamburgerMenu();
  });

  navigationLinkHandler();
};

const openHamburgerMenu = () => {
  nav.classList.add('active');
  hamburgerBtn.classList.add('hamburger_active');
  document.body.style.overflow = 'hidden';

  document.querySelectorAll('.header_link').forEach((link) => {
    link.classList.toggle('active');
  });
};

const closesHamburgerMenu = () => {
  nav.classList.remove('active');
  hamburgerBtn.classList.remove('hamburger_active');
  document.body.style.overflow = '';

  document.querySelectorAll('.header_link').forEach((link) => {
    link.classList.remove('active');
  });
};

const navigationLinkHandler = () => {
  document.querySelectorAll('.header_link').forEach((link) => {
    link.addEventListener('click', () => {
      closesHamburgerMenu();
    });
  });
};