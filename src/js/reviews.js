import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

Swiper.use([Pagination, Navigation]);

const swiper = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
