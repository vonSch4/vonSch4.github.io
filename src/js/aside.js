const showBtnAside = document.querySelector('.header__burger');
const closeBtnAside = document.querySelector('.aside__close');

const aside = document.querySelector('.aside');
const mainContentWrapper = document.querySelector('.content-wrapper');
const overlayAside = document.querySelector('.overlay-aside');

export { aside, mainContentWrapper, overlayAside };

showBtnAside.addEventListener('click', () => {
  aside.classList.add('aside--open');
  mainContentWrapper.classList.add('blur');
  overlayAside.classList.add('overlay-aside--open');
});

closeBtnAside.addEventListener('click', () => {
  aside.classList.remove('aside--open');
  mainContentWrapper.classList.remove('blur');
  overlayAside.classList.remove('overlay-aside--open');
});

overlayAside.addEventListener('click', () => {
  aside.classList.remove('aside--open');
  mainContentWrapper.classList.remove('blur');
  overlayAside.classList.remove('overlay-aside--open');
});
