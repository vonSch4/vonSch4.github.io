const showBtnBrand = document.querySelector('.brand-menu__show-all-btn');
const showBtnBrandImg = showBtnBrand.querySelector('.brand-menu__show-img');
const showBtnBrandText = showBtnBrand.querySelector('.brand-menu__show-text');

const showAllBrand = document.querySelector('.brand-menu__swiper');

showBtnBrand.addEventListener('click', () => {
  showAllBrand.classList.toggle('brand-menu__swiper--open');
  showBtnBrandImg.classList.toggle('brand-menu__show-img--rotate');

  showAllBrand.classList.contains('brand-menu__swiper--open')
    ? (showBtnBrandText.textContent = 'Скрыть')
    : (showBtnBrandText.textContent = 'Показать все');
});
