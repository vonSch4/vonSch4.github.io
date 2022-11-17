const slideMenu = document.querySelector('.slide-menu__list');
const slideLinks = slideMenu.querySelectorAll('.slide-menu__link');
let activeSlideLink = slideMenu.querySelector('.slide-menu__link--active');

function addActiveLinkSlideHandler(link) {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    activeSlideLink.classList.remove('slide-menu__link--active');
    activeSlideLink = link;
    link.classList.add('slide-menu__link--active');
  });
}

for (let i = 0; i < slideLinks.length; i++) {
  addActiveLinkSlideHandler(slideLinks[i]);
}

const asideMenu = document.querySelector('.aside .nav__list');
const asideLinks = asideMenu.querySelectorAll('.nav__link');
let activeAsideLink = asideMenu.querySelector('.nav__link--active');

function addActiveLinkAsideHandler(link) {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    activeAsideLink.classList.remove('nav__link--active');
    activeAsideLink = link;
    link.classList.add('nav__link--active');
  });
}

for (let i = 0; i < asideLinks.length; i++) {
  addActiveLinkAsideHandler(asideLinks[i]);
}
