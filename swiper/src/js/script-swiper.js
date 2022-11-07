(function() {

    'use strict';

    // точка останова, где swiper будет уничтожен
    const breakpoint = window.matchMedia( '(min-width: 768px)' );

    let mySwiper;


    const breakpointChecker = function() {

      // если экран > 768px
      if ( breakpoint.matches === true ) {

        // очистить старые экземпляры и встроенные стили, если они доступны
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

        // и/или ничего не делать
        return;

        // при экране < 768px
        } else if ( breakpoint.matches === false ) {

          // включить swiper
          return enableSwiper();

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
            }
        }

      });

    };


    // следить за изменениями размера экрана
    breakpoint.addEventListener('change', breakpointChecker);

    breakpointChecker();

})();

// кнопки показать/скрыть
let showButton = document.querySelector('.brand-menu__show-all');
let hideButton = document.querySelector('.brand-menu__hide');

// меню брендов
let showAllBrand = document.querySelector('.brand-menu__swiper');


// открытие меню брендов
showButton.addEventListener('click', function () {
    showAllBrand.classList.add('brand-menu__swiper--open');
    showButton.classList.add('brand-menu__show-all--hidden');
    hideButton.classList.remove('brand-menu__hide--hidden');
});


// закрытие меню брендов
hideButton.addEventListener('click', function () {
    showAllBrand.classList.remove('brand-menu__swiper--open');
    hideButton.classList.add('brand-menu__hide--hidden');
    showButton.classList.remove('brand-menu__show-all--hidden');
})
