const menuButton = document.querySelectorAll('#menu-button');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');
const header = document.querySelector('header');
const body = document.body;

// Função para fechar o menu
const closeMenu = () => {
  menu.classList.remove('left-0', 'bg-deepRed');
  menu.classList.add('left-[-100%]');
  body.classList.remove('overflow-hidden');
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const handleScroll = () => {
    if (window.scrollY > 1) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll);
  handleResize();
  window.addEventListener('resize', handleResize);
});

menuButton.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = menu.classList.contains('left-0');
    menu.classList.toggle('left-0', !isOpen);
    menu.classList.toggle('left-[-100%]', isOpen);
    menu.classList.toggle('bg-deepRed', !isOpen);
    body.classList.toggle('overflow-hidden', !isOpen);
  });
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => closeMenu());
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !event.target.closest('#menu-button')) {
    closeMenu();
  }
});
