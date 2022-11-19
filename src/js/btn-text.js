const showBtnText = document.querySelector('.read-more-btn');
const showBtnTextImg = showBtnText.querySelector('.read-more-btn__img');
const showBtnTextText = showBtnText.querySelector('.read-more-btn__text');

const showAllText = document.querySelector('.section__container-text');

showBtnText.addEventListener('click', () => {
  showAllText.classList.toggle('section__container-text--open');
  showBtnTextImg.classList.toggle('read-more-btn__img--rotate');

  showAllText.classList.contains('section__container-text--open')
    ? (showBtnTextText.textContent = 'Скрыть')
    : (showBtnTextText.textContent = 'Читать далее');
});
