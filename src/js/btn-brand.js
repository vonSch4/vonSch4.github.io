const showBtnBrand = document.querySelector('.brand-menu__show-all-btn');
const showBtnBrandImg = showBtnBrand.querySelector('.brand-menu__show-img');
const showBtnBrandText = showBtnBrand.querySelector('.brand-menu__show-text');

const showAllBrand = document.querySelector('.brand-menu__swiper');

showBtnBrand.addEventListener('click', () => {
  if (showAllBrand.classList.contains('brand-menu__swiper--open')) {
    showAllBrand.classList.remove('brand-menu__swiper--open');
    showBtnBrandImg.classList.remove('brand-menu__show-img--rotate');
    showBtnBrandText.textContent = 'Показать все';
  } else {
    showAllBrand.classList.add('brand-menu__swiper--open');
    showBtnBrandImg.classList.add('brand-menu__show-img--rotate');
    showBtnBrandText.textContent = 'Скрыть';
  }
});
