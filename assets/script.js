// Brand icons
const brands__list = document.querySelector(".brands__list");
const allListItems = brands__list.querySelectorAll(".brands__item");

// Toggle button and its elements
const brands__button = document.querySelector(".brands__button");
const brand__text = brands__button.querySelector(".brands__button-text");
const brands__arrowIcon = brands__button.querySelector(".brands__arrow-icon");

brands__button.addEventListener("click", () => {
  // If all brand items are displayed == true
  let allItemsDisplayed =
    brand__text.textContent === "Показать все" ? true : false;
  // Change the text  
  allItemsDisplayed
    ? (brand__text.textContent = "Скрыть")
    : (brand__text.textContent = "Показать все");
  
  brands__list.classList.toggle("brands__list--show-brands");
  brands__arrowIcon.classList.toggle("brands__arrow-icon--turned");
});


// **************** Swiper *************

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 16,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});