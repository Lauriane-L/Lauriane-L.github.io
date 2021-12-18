(function () {
  /*
________________
BURGER MENU */

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

  /*
_________________
NAV ANIMATION */

  const navigation = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navigation.classList.add("anim-header");
    } else {
      navigation.classList.remove("anim-header");
    }
  });

  /*
_________________
BLOC PARALLAXE */

  const firstBloc = document.querySelector(".skateur-bloc");
  const firstBlocRatio = 20;
  const secondBloc = document.querySelector(".skatepark-bloc");
  const secondBlocRatio = 40;
  const thirdBloc = document.querySelector(".first-bloc");
  const thirdBlocRatio = 60;
  const forthPlate = document.querySelector(".second-bloc");
  const forthBlocRatio = 80;
  const fifthBloc = document.querySelector(".third-bloc");
  const fifthBlocRatio = 100;

  document.addEventListener("mousemove", (event) => {
    firstBloc.style.transform = `translate(
  -${event.clientX / firstBlocRatio}px,
  -${event.clientY / firstBlocRatio}px
)`;
    secondBloc.style.transform = `translate(
  -${event.clientX / secondBlocRatio}px, 
  -${event.clientY / secondBlocRatio}px
)`;
    thirdBloc.style.transform = `translate(
  -${event.clientX / thirdBlocRatio}px,
  -${event.clientY / thirdBlocRatio}px
 )`;
    forthPlate.style.transform = `translate(
  -${event.clientX / forthBlocRatio}px, 
  -${event.clientY / forthBlocRatio}px
)`;
    fifthBloc.style.transform = `translate(
  -${event.clientX / fifthBlocRatio}px, 
  -${event.clientY / fifthBlocRatio}px
)`;
  });

  /*
_________________
HORIZONTAL SCROLL DETECTION */

  if (window.innerWidth > 966) {
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
  }
})();
