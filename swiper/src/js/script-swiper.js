'use strict';

(function() {

    const breakpoint = window.matchMedia('(min-width: 768px)');
    let mySwiper;


    const breakpointChecker = function() {

      if (breakpoint.matches) {

        if (mySwiper) mySwiper.destroy(true, true);

        } else if (breakpoint.matches === false) {

          enableSwiper();

        }

    };


    const enableSwiper = function() {

      mySwiper = new Swiper ('.swiper', {

        spaceBetween: 16,
        slidesPerView: 1.15,

        grabCursor: true,

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


    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();

})();


let showButton = document.querySelector('.brand-menu__show-all');
let showButtonImg = showButton.querySelector('.brand-menu__show-img');
let showButtonText = showButton.querySelector('.brand-menu__show-text');

let showAllBrand = document.querySelector('.brand-menu__swiper');

let countClick = 0;


showButton.addEventListener('click', function() {

    if (countClick % 2 === 0) {

        showAllBrand.classList.add('brand-menu__swiper--open');
        showButtonText.textContent = 'Скрыть';
        showButtonImg.classList.add('brand-menu__show-img--rotate');

    } else {

        showAllBrand.classList.remove('brand-menu__swiper--open');
        showButtonText.textContent = 'Показать все';
        showButtonImg.classList.remove('brand-menu__show-img--rotate');

    }

    countClick++;

});
