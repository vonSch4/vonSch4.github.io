'use strict';

window.addEventListener('DOMContentLoaded', function() {

    const breakpoint = window.matchMedia('(min-width: 768px)');
    let mySwiper;


    const breakpointHandler = function() {

        if (breakpoint.matches) {

            if (mySwiper) mySwiper.destroy(true, true);

        } else {

          enableSwiper();

        }

    };


    const enableSwiper = function() {

      mySwiper = new Swiper ('.swiper', {

        spaceBetween: 16,
        slidesPerView: 1.15,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            370: {
                slidesPerView: 1.5,
            },

            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            680: {
                slidesPerView: 2.5,
            },
        },

      });

    };


    breakpoint.addEventListener('change', breakpointHandler);
    breakpointHandler();

});


const showButton = document.querySelector('.brand-menu__show-all');
const showButtonImg = showButton.querySelector('.brand-menu__show-img');
const showButtonText = showButton.querySelector('.brand-menu__show-text');

const showAllBrand = document.querySelector('.brand-menu__swiper');


showButton.addEventListener('click', function() {

    if (showAllBrand.classList.contains('brand-menu__swiper--open')) {

        showAllBrand.classList.toggle('brand-menu__swiper--open');
        showButtonImg.classList.toggle('brand-menu__show-img--rotate');
        showButtonText.textContent = 'Показать все';

    } else {

        showAllBrand.classList.toggle('brand-menu__swiper--open');
        showButtonImg.classList.toggle('brand-menu__show-img--rotate');
        showButtonText.textContent = 'Скрыть';

    }

});
