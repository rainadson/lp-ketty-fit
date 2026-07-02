document.addEventListener("DOMContentLoaded", function () {
  const timelineImage = document.querySelector(".timeline-image");

  // Função para verificar se o elemento está visível na tela
  function isVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Verifica se a imagem está visível
    return rect.top >= 0 && rect.bottom <= windowHeight;
  }

  // Função para ativar o efeito ao rolar
  function checkVisibility() {
    if (isVisible(timelineImage)) {
      timelineImage.classList.add("active");
    } else {
      timelineImage.classList.remove("active");
    }
  }

  // Evento de rolagem
  window.addEventListener("scroll", checkVisibility);

  // Verifica visibilidade ao carregar a página
  checkVisibility();
});

function scrollToDiv() {
  document.querySelector(".bottom-left").scrollIntoView({
    behavior: "smooth",
  });
}
