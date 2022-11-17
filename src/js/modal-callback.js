import { aside, mainContentWrapper, overlayAside } from './aside';

const showBtnCallback = document.querySelector('.header .menu__btn-call');
const closeBtnCallback = document.querySelector('.modal-callback__close');
const showBtnCallbackAside = aside.querySelector('.menu__btn-call');

const showCallback = document.querySelector('.modal-callback');
const overlayCallback = document.querySelector('.overlay-modal-callback');

showBtnCallback.addEventListener('click', () => {
  showCallback.classList.add('modal-callback--open');
  mainContentWrapper.classList.add('blur');
  overlayCallback.classList.add('overlay-modal-callback--open');
  aside.classList.add('blur');
});

showBtnCallbackAside.addEventListener('click', () => {
  showCallback.classList.add('modal-callback--open');
  mainContentWrapper.classList.add('blur');
  overlayCallback.classList.add('overlay-modal-callback--open');
  aside.classList.remove('aside--open');
  aside.classList.add('blur');
  overlayAside.classList.remove('overlay-aside--open');
});

closeBtnCallback.addEventListener('click', () => {
  showCallback.classList.remove('modal-callback--open');
  mainContentWrapper.classList.remove('blur');
  overlayCallback.classList.remove('overlay-modal-callback--open');
  aside.classList.remove('blur');
});

overlayCallback.addEventListener('click', () => {
  showCallback.classList.remove('modal-callback--open');
  mainContentWrapper.classList.remove('blur');
  overlayCallback.classList.remove('overlay-modal-callback--open');
  aside.classList.remove('blur');
});
