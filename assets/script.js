const brands__list = document.querySelector('.brands__list');
const allListItems = brands__list.querySelectorAll('.brands__item');
const brands__button = document.querySelector('.brands__button');
const brand__text = brands__button.querySelector('.brands__button-text');
const brands__arrowIcon = brands__button.querySelector('.brands__arrow-icon');

brands__button.addEventListener('click', () => {
  if (brand__text.textContent !== "Скрыть") {
    brand__text.textContent = "Скрыть";
    brands__list.classList.add('brands__list--show-brands');
    brands__arrowIcon.classList.add('brands__arrow-icon--turned');
  } else {
    brand__text.textContent = "Показать все";
    brands__list.classList.remove('brands__list--show-brands');
    brands__arrowIcon.classList.remove('brands__arrow-icon--turned');
  }
})
