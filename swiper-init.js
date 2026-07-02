document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: { delay: 3000 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var swiperMobile = new Swiper(".section7-swiper-mobile", {
    // direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 0,

    loop: true,
    autoplay: { delay: 3000 },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const answer = question.nextElementSibling;

    // Alterna a expansão/recolhimento
    if (faqItem.classList.contains("active")) {
      answer.style.maxHeight = null;
      faqItem.classList.remove("active");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      faqItem.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM carregado.");

  // Seleciona todos os círculos e cards
  const circles = document.querySelectorAll(".timeline-circle");
  const cards = document.querySelectorAll(
    ".timeline-card, .timeline-card2, .timeline-card3, .timeline-card4, .timeline-card5, .timeline-card6, .timeline-card7"
  );

  if (!circles.length) {
    console.error("Nenhum círculo encontrado!");
    return;
  } else {
    console.log(`Encontrados ${circles.length} círculos.`);
  }

  if (!cards.length) {
    console.error("Nenhum card encontrado!");
    return;
  } else {
    console.log(`Encontrados ${cards.length} cards.`);
  }

  // Função para verificar se um elemento está visível
  function isVisible(element, offset = 200) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Adiciona um offset para controlar o momento da visibilidade
    const elementVisibleTop = rect.top + offset; // Considera quando o topo + offset está visível
    const elementVisibleBottom = rect.bottom - offset; // Considera quando o bottom - offset está visível

    // Verifica se a parte especificada do elemento está visível na tela
    return elementVisibleTop < windowHeight && elementVisibleBottom > 0;
  }

  // Função para ativar os círculos visíveis
  function checkVisibility() {
    circles.forEach((circle, index) => {
      if (isVisible(circle)) {
        if (!circle.classList.contains("active")) {
          console.log(
            `Círculo ${index + 1} visível. Adicionando classe 'active'.`
          );
          circle.classList.add("active");
        }
      } else {
        if (circle.classList.contains("active")) {
          console.log(
            `Círculo ${index + 1} fora de vista. Removendo classe 'active'.`
          );
          circle.classList.remove("active");
        }
      }
    });

    cards.forEach((card, index) => {
      if (isVisible(card)) {
        if (!card.classList.contains("active")) {
          console.log(
            `Card ${index + 1} visível. Adicionando classe 'active'.`
          );
          card.classList.add("active");
        }
      } else {
        if (card.classList.contains("active")) {
          console.log(
            `Card ${index + 1} fora de vista. Removendo classe 'active'.`
          );
          card.classList.remove("active");
        }
      }
    });
  }

  // Evento de scroll para verificar visibilidade
  window.addEventListener("scroll", () => {
    console.log("Scroll detectado.");
    checkVisibility();
  });

  // Verifica visibilidade ao carregar a página
  console.log("Executando verificação inicial.");
  checkVisibility();
});
