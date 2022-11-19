const showBtnEquip = document.querySelector('.equip-menu__show-all-btn');
const showBtnEquipImg = showBtnEquip.querySelector('.equip-menu__show-img');
const showBtnEquipText = showBtnEquip.querySelector('.equip-menu__show-text');

const showAllEquip = document.querySelector('.equip-menu__swiper');

showBtnEquip.addEventListener('click', () => {
  showAllEquip.classList.toggle('equip-menu__swiper--open');
  showBtnEquipImg.classList.toggle('equip-menu__show-img--rotate');

  showAllEquip.classList.contains('equip-menu__swiper--open')
    ? (showBtnEquipText.textContent = 'Скрыть')
    : (showBtnEquipText.textContent = 'Показать все');
});
