const menuButton = document.querySelectorAll('#menu-button');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

menuButton.forEach(button => {
  button.addEventListener('click', () => {
    const isOpen = menu.classList.contains('left-0');
    menu.classList.toggle('left-0', !isOpen);
    menu.classList.toggle('left-[-100%]', isOpen);
    menu.classList.toggle('bg-deepRed', !isOpen);
  });
});

// Fecha o menu ao clicar em qualquer link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('left-0');
    menu.classList.remove('bg-deepRed');
    menu.classList.add('left-[-100%]');
  });
});
