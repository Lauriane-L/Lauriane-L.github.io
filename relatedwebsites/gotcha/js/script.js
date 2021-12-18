(function () {
  /*
________________
IMAGE APPARITION LEFT/RIGHT  */

  const imageElementList = document.querySelectorAll(".image-apparition");

  imageElementList.forEach((imageElement) => {
    let imageObserver = new IntersectionObserver(onObserveImage, {
      threshold: 0.3,
    });
    imageObserver.observe(imageElement);

    function onObserveImage(entryList) {
      if (entryList[0].intersectionRatio > 0.3) {
        onImageVisible();
      }
    }

    function onImageVisible() {
      imageElement.classList.add("active");
    }
  });
})();

/*
_________________
SPORT IMAGE CHANGE 
(en dehors de la IIFE pour activer le hover sur la landing page) */

const sportPicElement = document.querySelector(".sport-pic");
const sportItemElementList = document.querySelectorAll(".item-sport");
const sportCount = sportItemElementList.length;
let currentSport = 0;
let sportInterval;

function startSportInteral() {
  sportInterval = setInterval(() => {
    currentSport = (currentSport + 1) % sportCount;
    const sportNameElement = sportItemElementList[currentSport];
    updateCurrentSportStyle(sportNameElement);
  }, 2000);
}

startSportInteral();

function updateCurrentSportStyle(sportNameElement) {
  sportPicElement.setAttribute(
    "src",
    `img/${sportNameElement.getAttribute("img-name")}`
  );
  sportPicElement.setAttribute(
    "alt",
    sportNameElement.getAttribute("data-loc")
  );
  sportPicElement.classList.add("active");
  setTimeout(() => {
    sportPicElement.classList.remove("active");
  }, 300);

  sportItemElementList.forEach((sportNameElement2, index) => {
    sportNameElement2.classList.toggle("active", currentSport === index);
  });
}
