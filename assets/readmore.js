
// **************** Read more *************

// Text blocks
const firstBlock = document.querySelector(".first-block__text");
const text2 = firstBlock.querySelectorAll(".first-block__text2");
const text3 = firstBlock.querySelectorAll(".first-block__text3");

// Toggle button and its elements
const readButton = firstBlock.querySelector(".first-block__button");
const buttonText = readButton.querySelector(".first-block__read-more");
const buttonArrow = readButton.querySelector(".first-block__arrow-icon");
console.log(firstBlock);

function toggleText() {
  // If all brand items are displayed == true
  let textHidden =
    buttonText.textContent === "Читать далее" ? true : false;
  // Change the text  
  textHidden
    ? (buttonText.textContent = "Скрыть")
    : (buttonText.textContent = "Читать далее");
  // test - need a text toggler here
  buttonArrow.classList.toggle("first-block__arrow--turned");
}

readButton.addEventListener("click", toggleText);