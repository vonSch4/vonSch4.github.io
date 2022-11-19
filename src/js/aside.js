const showBtnAside = document.querySelector('.header__burger');
const closeBtnAside = document.querySelector('.aside__close');

const aside = document.querySelector('.aside');
const mainContentWrapper = document.querySelector('.content-wrapper');
const overlayAside = document.querySelector('.overlay-aside');

export { aside, mainContentWrapper, overlayAside };

function asideHandler() {
  aside.classList.toggle('aside--open');
  mainContentWrapper.classList.toggle('blur');
  overlayAside.classList.toggle('overlay-aside--open');
}

showBtnAside.addEventListener('click', () => {
  asideHandler();
  setTimeout(() => {
    aside.focus();
  }, 200);
});

closeBtnAside.addEventListener('click', () => {
  asideHandler();
  mainContentWrapper.focus();
});

overlayAside.addEventListener('click', () => {
  asideHandler();
  mainContentWrapper.focus();
});
