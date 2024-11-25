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

document.getElementById("show-more").addEventListener("click", function () {
  const hiddenFaqs = document.getElementById("hidden-faqs");
  const isHidden = hiddenFaqs.classList.contains("hidden");
  const icon = this.querySelector("svg"); // Seleciona o ícone dentro do botão
  
  if (isHidden) {
    hiddenFaqs.classList.remove("hidden");
    icon.classList.add("rotate-180");
  } else {
    hiddenFaqs.classList.add("hidden");
    icon.classList.remove("rotate-180");
  }
});