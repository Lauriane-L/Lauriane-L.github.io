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
