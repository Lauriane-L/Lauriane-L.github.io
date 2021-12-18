/*
________________
BURGER MENU */

let burger = document.querySelector(".burger");
let menu = document.querySelector(".site-header-menu-responsive");

burger.addEventListener("click", function () {
  if (menu.classList.contains("active") == false) {
    burger.classList.add("active");
    menu.classList.add("active");
  } else {
    burger.classList.remove("active");
    menu.classList.remove("active");
  }
});
