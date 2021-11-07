(function () {
  /*
_________________
NAV ANIMATION */

  const navigation = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      navigation.classList.add("anim-header");
    } else {
      navigation.classList.remove("anim-header");
    }
  });

  /*
_________________
TYPEWRITTER EFFECT */

  const textAnim = document.querySelector(".text-effect");

  new Typewriter(textAnim, {
    deleteSpeed: 30,
  })
    .changeDelay(30)
    .typeString(
      " des sens sans comparaison et respectueux de la nature qui nous entoure."
    )
    .start();

  /*
_________________
PLATES PARALLAXE */

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
APPARITION REASONS ELEMENTS  */

  const reasonsItemsElement = document.querySelector(".reasons-items");

  let reasonsItemsObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].intersectionRatio > 0) {
        reasonsItemsElement.classList.toggle("active", true);
      }
    },
    { threshold: 0.25 }
  );

  reasonsItemsObserver.observe(reasonsItemsElement);

  /*
_________________
HORIZONTAL SCROLL DETECTION */

  const horizontalScrollContainer = document.querySelector(
    ".scroll-horizontal-article-container"
  );
  const horizontalScrollBlock = document.querySelector(
    ".scroll-horizontal-article"
  );
  const horizontalScrollArticles = document.querySelectorAll(
    ".horizontal-scroll-article"
  );

  const headerSize = 60;
  const articleHeight = window.innerHeight;
  const articleWidth = window.innerWidth;
  const scrollSafeArea = 400;

  const horizontalScrollContainerTop =
    horizontalScrollContainer.getBoundingClientRect().top - headerSize;
  const horizontalScrollBlockSize =
    (horizontalScrollArticles.length - 1) * articleWidth +
    articleHeight +
    scrollSafeArea * 2;
  horizontalScrollContainer.style.height = `${
    horizontalScrollBlockSize - headerSize
  }px`;
  const innerScrollMax = horizontalScrollBlockSize - articleHeight;

  horizontalScrollBlock.scroll(0, 0);
  document.addEventListener("scroll", () => {
    const innerScroll = Math.min(
      innerScrollMax,
      Math.max(0, window.scrollY - horizontalScrollContainerTop)
    );
    horizontalScrollBlock.scroll(innerScroll - scrollSafeArea, 0);
    horizontalScrollBlock.style.transform = `translateY(${innerScroll}px)`;
  });

  /*
_________________
COMING ARTICLES */

  const articlesElement = document.querySelector(".last-articles");

  let articlesObserver = new IntersectionObserver(onObserveArticles);
  articlesObserver.observe(articlesElement);

  function onObserveArticles(entryList) {
    if (entryList[0].intersectionRatio > 0) {
      onArticlesVisible();
    }
  }

  function onArticlesVisible() {
    articlesElement.classList.add("active");
  }

  /*
_________________
CITY IMAGE CHANGE */

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
    cityPicElement.setAttribute(
      "alt",
      cityNameElement.getAttribute("data-loc")
    );
    cityPicElement.classList.add("active");
    setTimeout(() => {
      cityPicElement.classList.remove("active");
    }, 300);

    cityNameElementList.forEach((cityNameElement2, index) => {
      cityNameElement2.classList.toggle("active", currentCity === index);
    });
  }
})();
