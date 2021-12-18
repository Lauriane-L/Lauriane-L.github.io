/**
 * CHECKBOX
 */

// 1) Cibler la checkbox
var checkboxElementList = document.querySelectorAll(".checkbox");

// 2) Réagir au clic sur la checkbox
checkboxElementList.forEach(registerCheckboxOnClick);

function registerCheckboxOnClick(checkboxElement) {
  checkboxElement.onclick = onCheckboxClick;

  // 3) Changer l'affichage de la checkbox
  function onCheckboxClick() {
    checkboxElement.classList.toggle("active");
  }
}

/**
 * COMMING QUOTE
 */

// 1) Cibler la citation
var quoteElement = document.querySelector(".genre-article-quote");

// 2) Réagir au scroll sur la citation
var quoteObserver = new IntersectionObserver(onObserveQuote);
quoteObserver.observe(quoteElement);

function onObserveQuote(entryList) {
  if (entryList[0].intersectionRatio > 0) {
    onQuoteVisible();
  }
}

// 3) Changer l'affichage de la citation
function onQuoteVisible() {
  quoteElement.classList.add("active");
}

/**
 * IMAGES COLOR
 */

// 1) Cibler l'image
var imageColorElementList = document.querySelectorAll(".article-kind-image");

// 2) Réagir au scroll sur l'image
imageColorElementList.forEach(observeImageColor);

function observeImageColor(imageColorElement) {
  var imageColorObserver = new IntersectionObserver(onObserveImage, {
    threshold: 0.25,
  });
  imageColorObserver.observe(imageColorElement);

  function onObserveImage(entryList) {
    if (entryList[0].intersectionRatio > 0) {
      onImageVisible();
    }
  }
  // 3) Changer l'affichage de l'image
  function onImageVisible() {
    imageColorElement.classList.add("active");
  }
}

/**
 * BURGER MENU
 */

let burger = document.querySelector(".burger");
let menu = document.querySelector(".site-header-menu");

burger.addEventListener("click", function () {
  if (menu.classList.contains("active") == false) {
    burger.classList.add("active");
    menu.classList.add("active");
  } else {
    burger.classList.remove("active");
    menu.classList.remove("active");
  }
});
