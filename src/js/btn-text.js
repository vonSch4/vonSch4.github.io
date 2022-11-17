const showBtnText = document.querySelector('.read-more-btn');
const showBtnTextImg = showBtnText.querySelector('.read-more-btn__img');
const showBtnTextText = showBtnText.querySelector('.read-more-btn__text');

const showAllText = document.querySelector('.section__container-text');

showBtnText.addEventListener('click', () => {
  if (showAllText.classList.contains('section__container-text--open')) {
    showAllText.classList.remove('section__container-text--open');
    showBtnTextImg.classList.remove('read-more-btn__img--rotate');
    showBtnTextText.textContent = 'Читать далее';
  } else {
    showAllText.classList.add('section__container-text--open');
    showBtnTextImg.classList.add('read-more-btn__img--rotate');
    showBtnTextText.textContent = 'Скрыть';
  }
});
