const showBtnEquip = document.querySelector('.equip-menu__show-all-btn');
const showBtnEquipImg = showBtnEquip.querySelector('.equip-menu__show-img');
const showBtnEquipText = showBtnEquip.querySelector('.equip-menu__show-text');

const showAllEquip = document.querySelector('.equip-menu__swiper');

showBtnEquip.addEventListener('click', () => {
  if (showAllEquip.classList.contains('equip-menu__swiper--open')) {
    showAllEquip.classList.remove('equip-menu__swiper--open');
    showBtnEquipImg.classList.remove('equip-menu__show-img--rotate');
    showBtnEquipText.textContent = 'Показать все';
  } else {
    showAllEquip.classList.add('equip-menu__swiper--open');
    showBtnEquipImg.classList.add('equip-menu__show-img--rotate');
    showBtnEquipText.textContent = 'Скрыть';
  }
});
