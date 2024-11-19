// Brand icons
const brands__list = document.querySelector(".brands__list");
const allListItems = brands__list.querySelectorAll(".brands__item");

// Toggle button and its elements
const brands__button = document.querySelector(".brands__button");
const brand__text = brands__button.querySelector(".brands__button-text");
const brands__arrowIcon = brands__button.querySelector(".brands__arrow-icon");

function toggleBrands() {
  // If all brand items are displayed == true
  let allItemsDisplayed =
    brand__text.textContent === "Показать все" ? true : false;
  // Change the text
  allItemsDisplayed
    ? (brand__text.textContent = "Скрыть")
    : (brand__text.textContent = "Показать все");

  brands__list.classList.toggle("brands__list--show-brands");
  brands__arrowIcon.classList.toggle("brands__arrow-icon--turned");

  if (allItemsDisplayed) {
    const firstItemWidth = allListItems[0].offsetWidth;
    for (let i = 6; i < allListItems.length; i++) {
      console.log(i);
      allListItems[i].style.maxWidth = firstItemWidth + "px";
    }
  }
}

brands__button.addEventListener("click", toggleBrands);

// **************** Swiper *************
// Boolean - true if < 768px
const mediaQuery = window.matchMedia("(max-width:767.98px)").matches;
let swiper = null;

function initializeSwiper() {
  if (mediaQuery) {
    swiper = new Swiper(".swiper", {
      // Optional parameters
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 16,
      // For accessibility
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 8,
        clickable: true,
      },
    });
  }
}

initializeSwiper();

window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
    // delete swiper
    swiper.destroy();
  } else {
    // initialize swiper again
    initializeSwiper();
  }
});