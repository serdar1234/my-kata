// Brand icons
const brands__list = document.querySelector(".brands__list");
const allListItems = brands__list.querySelectorAll(".swiper-slide");

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

  function widthEqualizer() {
    const firstItemWidth = allListItems[0].offsetWidth;
    let shownItemCount = 0;
    if (allItemsDisplayed && window.matchMedia("(max-width:991.98px)").matches) {
      shownItemCount = 6;
    } else if ((allItemsDisplayed && window.matchMedia("(min-width:992px)").matches)){
      shownItemCount = 8;
    }
    for (let i = shownItemCount; i < allListItems.length; i++) {
      allListItems[i].style.maxWidth = firstItemWidth + "px";
    }
  }
  widthEqualizer();
}

brands__button.addEventListener("click", toggleBrands);

// **************** Swiper *************
let swiper = null;

function initializeSwiper() {
  const mediaQuery = window.matchMedia("(max-width:767.98px)").matches;

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

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768 && swiper !== null) {
    // delete swiper
    swiper.destroy();
  } else {
    // initialize swiper again
    initializeSwiper();
  }
});
