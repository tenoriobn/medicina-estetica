import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const prevButton = document.getElementById('button-prev');
const nextButton = document.getElementById('button-next');

const updateButtonStyles = (swiper) => {
  if (swiper.isBeginning) {
    prevButton.classList.remove('bg-deepRed');
    prevButton.classList.add('bg-slate-400');
  } else {
    prevButton.classList.remove('bg-slate-400');
    prevButton.classList.add('bg-deepRed');
  }

  if (swiper.isEnd) {
    nextButton.classList.remove('bg-deepRed');
    nextButton.classList.add('bg-slate-400');
  } else {
    nextButton.classList.remove('bg-slate-400');
    nextButton.classList.add('bg-deepRed');
  }
};

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination],
  spaceBetween: 16, // Espaçamento padrão
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // Configuração para dispositivos móveis
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
  on: {
    init: (swiper) => updateButtonStyles(swiper),
    slideChange: (swiper) => updateButtonStyles(swiper),
  },
});
