//CONTENT title-2
function openCity(event, mission) {
  let missionVision = document.querySelectorAll(".mission-vision-title ul li");
  let vision = document.querySelectorAll(".content");

  missionVision.forEach((item) => {
    item.classList.remove("bar-active");
  });

  event.target.classList.add("bar-active");

  vision.forEach((item) => {
    if (mission === item.id) {
      item.style.display = "block";
      item.style.opacity = "0";
      item.style.transform = "scale(0)";
      setTimeout(() => {
        item.style.transform = "scale(100%)";
        item.style.opacity = "1";
      }, 1);
    } else {
      item.style.transform = "scale(0)";
      item.style.display = "none";
    }
  });
}

//CONTENT title-5
function openCityUnder(event, mission) {
  let missionVision = document.querySelectorAll(".commit-title ul li");
  let vision = document.querySelectorAll(".content-under");

  missionVision.forEach((item) => {
    item.classList.remove("bar-active-under");
  });

  event.target.classList.add("bar-active-under");

  vision.forEach((item) => {
    if (mission === item.id) {
      item.style.display = "block";
      item.style.opacity = "0";
      item.style.transform = "scale(0)";
      setTimeout(() => {
        item.style.transform = "scale(100%)";
        item.style.opacity = "1";
      }, 1);
    } else {
      item.style.transform = "scale(0)";
      item.style.display = "none";
    }
  });
}

//title-4
function Numbers() {}

//flex-container
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  let headerHeight = document.querySelector(".flex-container").offsetTop;
  let menuHeight = document.querySelector(".menu-collapse").offsetHeight;
  let flexContainer = document.querySelector(".flex-container-scroll");

  if (scrollPosition + menuHeight >= headerHeight) {
    flexContainer.style.top = `${menuHeight}px`;
    flexContainer.style.position = "fixed";
  } else {
    flexContainer.style.top = `0px`;
    flexContainer.style.position = "absolute";
  }
});

//Hàm để trượt xuống nội dung
function scrollToFlex1() {
  let menuHeight = document.querySelector(".menu-collapse").offsetHeight;
  let headerHeight = document.querySelector(".flex-container").offsetHeight;
  let flex1Top = document.getElementById("flex-1").offsetTop;

  window.scrollTo(0, flex1Top - menuHeight - headerHeight + 3);
}

function scrollToFlex2() {
  let menuHeight = document.querySelector(".menu-collapse").offsetHeight;
  let headerHeight = document.querySelector(".flex-container").offsetHeight;
  let flex2Top = document.getElementById("flex-2").offsetTop;

  window.scrollTo(0, flex2Top - menuHeight - headerHeight + 3);
}

function scrollToFlex3() {
  let menuHeight = document.querySelector(".menu-collapse").offsetHeight;
  let headerHeight = document.querySelector(".flex-container").offsetHeight;
  let flex3Top = document.getElementById("flex-3").offsetTop;

  window.scrollTo(0, flex3Top - menuHeight - headerHeight + 3);
}

function scrollToFlex4() {
  let menuHeight = document.querySelector(".menu-collapse").offsetHeight;
  let headerHeight = document.querySelector(".flex-container").offsetHeight;
  let flex4Top = document.getElementById("flex-4").offsetTop;

  window.scrollTo(0, flex4Top - menuHeight - headerHeight + 3);
}

function scrollToFlex5() {
  let menuHeight = document.querySelector(".menu-collapse").offsetHeight;
  let headerHeight = document.querySelector(".flex-container").offsetHeight;
  let flex5Top = document.getElementById("flex-5").offsetTop;

  window.scrollTo(0, flex5Top - menuHeight - headerHeight + 3);
}

//lướt tới đâu thì hiệu ứng tới đó
let doOneTime = false;
window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  let scrollPosition = window.scrollY;
  let currPosition = scrollPosition + (windowHeight * 0.6);

  //Chữ chạy từ ngoài vào trong
  let firstEffectSentence1 = document.querySelector(".title-1 .sentence-1");
  let firstEffectSentence2 = document.querySelector(".title-1 .sentence-2");
  let firstEffectTop = document.querySelector(".title-1").offsetTop;
  if (firstEffectTop < currPosition) {
    firstEffectSentence1.style.animation = "move-ltr 1s ease-out";
    firstEffectSentence1.style.opacity = "1";
    firstEffectSentence2.style.animation = "move-rtl 1s ease-out";
    firstEffectSentence2.style.opacity = "1";
  }

  //Dữ liệu số tăng
  let secondEffectTop = document.querySelector(".wrapper").offsetTop;
  console.log(secondEffectTop);
  console.log(currPosition);
  if ((secondEffectTop < currPosition) && !doOneTime) {
    doOneTime = true;
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) clearInterval(counter);
      }, duration);
    });
  }
});
