document.querySelectorAll('[data-accordion-button]').forEach(button => {
  button.addEventListener('click', () => {
    const allContents = document.querySelectorAll('[data-accordion-content]');
    const allIcons = document.querySelectorAll('[data-accordion-icon]');
    const content = button.nextElementSibling;
    const icon = button.querySelector('[data-accordion-icon]');

    // Fechar todos os outros accordions
    allContents.forEach(item => {
      if (item !== content) {
        item.classList.add('hidden');
        item.classList.remove('block');
      }
    });

    allIcons.forEach(svg => {
      if (svg !== icon) {
        svg.classList.remove('rotate-90');
      }
    });

    // Alternar o estado do accordion clicado
    content.classList.toggle('hidden');
    content.classList.toggle('block');

    // Rotacionar o ícone do botão clicado
    icon.classList.toggle('rotate-90');
  });
});
