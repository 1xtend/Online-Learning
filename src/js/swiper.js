import Swiper, { Navigation, Pagination } from 'swiper';

export const swiper = new Swiper('.swiper-reviews', {
  modules: [Navigation, Pagination],

  // loop: true,
  autoHeight: true,
  slidesPerView: 1,
  // slidesPerView: 'auto',
  spaceBetween: 24,
  // centeredSlides: true,
  // freeMode: true,
  // mousewheel: true,
  // grabCursor: true,
  // effect: 'fade',
  // effect: 'coverflow',
  // effect: 'creative',

  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  // grid: {
  //   rows: 2,
  // },

  navigation: {
    nextEl: '.swiper-reviews__btn_next',
    prevEl: '.swiper-reviews__btn_prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },

  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});
