/*
_________________
METRO LINES PARALLAXE */

const firstPlate = document.querySelector(".first-plate img");
const firstPlateRatio = 20;
const secondPlate = document.querySelector(".second-plate img");
const secondPlateRatio = 40;
const thirdPlate = document.querySelector(".third-plate img");
const thirdPlateRatio = 60;
const forthPlate = document.querySelector(".forth-plate img");
const forthPlateRatio = 80;

document.addEventListener("mousemove", (event) => {
  firstPlate.style.transform = `translate(
-${event.clientX / firstPlateRatio}px,
-${event.clientY / firstPlateRatio}px
)`;
  secondPlate.style.transform = `translate(
-${event.clientX / secondPlateRatio}px, 
-${event.clientY / secondPlateRatio}px
)`;
  thirdPlate.style.transform = `translate(
-${event.clientX / thirdPlateRatio}px,
-${event.clientY / thirdPlateRatio}px
)`;
  forthPlate.style.transform = `translate(
-${event.clientX / forthPlateRatio}px, 
-${event.clientY / forthPlateRatio}px
)`;
});

/*
_________________
IMAGE CHANGE */

const cityPicElement = document.querySelector(".city-pic");
const cityNameElementList = document.querySelectorAll(".item-city-nav");
const cityCount = cityNameElementList.length;
let currentCity = 0;
let cityInterval;

function startCityInteral() {
  cityInterval = setInterval(() => {
    currentCity = (currentCity + 1) % cityCount;
    const cityNameElement = cityNameElementList[currentCity];
    updateCurrentCityStyle(cityNameElement);
  }, 2000);
}

startCityInteral();

cityNameElementList.forEach((cityNameElement, index) => {
  cityNameElement.addEventListener("mouseover", () => {
    currentCity = index;
    updateCurrentCityStyle(cityNameElement);
    clearInterval(cityInterval);
  });
  cityNameElement.addEventListener("mouseleave", startCityInteral);
});

function updateCurrentCityStyle(cityNameElement) {
  cityPicElement.setAttribute(
    "src",
    `img/${cityNameElement.getAttribute("img-name")}`
  );
  cityPicElement.setAttribute("alt", cityNameElement.getAttribute("data-loc"));
  cityPicElement.classList.add("active");
  setTimeout(() => {
    cityPicElement.classList.remove("active");
  }, 300);

  cityNameElementList.forEach((cityNameElement2, index) => {
    cityNameElement2.classList.toggle("active", currentCity === index);
  });
}
