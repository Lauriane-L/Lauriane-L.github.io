/*
_________________
SPORT IMAGE CHANGE 
(activation du hover avant la IIFE) */

sportItemElementList.forEach((sportNameElement, index) => {
  sportNameElement.addEventListener("mouseover", () => {
    currentSport = index;
    updateCurrentSportStyle(sportNameElement);
    clearInterval(sportInterval);
  });
  sportNameElement.addEventListener("mouseleave", startSportInteral);
});

(function () {
  /*
________________
COUNTDOWN  */

  function getChrono() {
    const now = new Date().getTime();
    const countdownDate = new Date("March 25, 2022").getTime();
    const daysToGo = document.querySelector(".days-to-go");
    const hoursToGo = document.querySelector(".hours-to-go");
    const minutesToGo = document.querySelector(".minutes-to-go");
    const secondsToGo = document.querySelector(".seconds-to-go");
    const distanceBase = countdownDate - now;
    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

    daysToGo.innerHTML = `${days}`;
    hoursToGo.innerHTML = `${hours}`;
    minutesToGo.innerHTML = `${minutes}`;
    secondsToGo.innerHTML = `${seconds}`;
  }
  getChrono();

  const countDownInterval = setInterval(() => {
    getChrono();
  }, 1000);
})();
