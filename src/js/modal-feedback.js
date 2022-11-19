import { aside, mainContentWrapper, overlayAside } from './aside';

const showBtnFeedback = document.querySelector('.header .menu__btn-chat');
const closeBtnFeedback = document.querySelector('.modal-feedback__close');
const showBtnFeedbackAside = aside.querySelector('.menu__btn-chat');

const showFeedback = document.querySelector('.modal-feedback');
const overlayFeedback = document.querySelector('.overlay-modal-feedback');

showBtnFeedback.addEventListener('click', () => {
  showFeedback.classList.add('modal-feedback--open');
  mainContentWrapper.classList.add('blur');
  overlayFeedback.classList.add('overlay-modal-feedback--open');
  aside.classList.add('blur');
  setTimeout(() => {
    showFeedback.focus();
  }, 200);
});

showBtnFeedbackAside.addEventListener('click', () => {
  showFeedback.classList.add('modal-feedback--open');
  mainContentWrapper.classList.add('blur');
  overlayFeedback.classList.add('overlay-modal-feedback--open');
  aside.classList.remove('aside--open');
  aside.classList.add('blur');
  overlayAside.classList.remove('overlay-aside--open');
  setTimeout(() => {
    showFeedback.focus();
  }, 200);
});

closeBtnFeedback.addEventListener('click', () => {
  showFeedback.classList.remove('modal-feedback--open');
  mainContentWrapper.classList.remove('blur');
  overlayFeedback.classList.remove('overlay-modal-feedback--open');
  aside.classList.remove('blur');
  mainContentWrapper.focus();
});

overlayFeedback.addEventListener('click', () => {
  showFeedback.classList.remove('modal-feedback--open');
  mainContentWrapper.classList.remove('blur');
  overlayFeedback.classList.remove('overlay-modal-feedback--open');
  aside.classList.remove('blur');
  mainContentWrapper.focus();
});
