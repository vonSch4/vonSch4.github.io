import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

const breakpoint = window.matchMedia('(min-width: 768px)');
const sliders = document.querySelectorAll('.swiper');
let mySwipers = [];

function enableSwiper() {
  sliders.forEach((slider, index) => {
    if (!slider.swiper) {
      mySwipers[index] = new Swiper(slider, {
        spaceBetween: 16,
        slidesPerView: 1.15,

        pagination: {
          el: slider.querySelector('.swiper-pagination'),
          clickable: true
        },

        breakpoints: {
          370: {
            slidesPerView: 1.4
          },

          480: {
            slidesPerView: 1.8,
            spaceBetween: 20
          },

          680: {
            slidesPerView: 2.5
          }
        }
      });
    } else {
      return;
    }
  });
}

function destroySwiper() {
  sliders.forEach((slider, index) => {
    if (slider.swiper) mySwipers[index].destroy(true, true);
  });
}

function breakpointHandler() {
  breakpoint.matches ? destroySwiper() : enableSwiper();
}

breakpointHandler();
breakpoint.addEventListener('change', breakpointHandler);
