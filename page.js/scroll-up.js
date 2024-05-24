document.addEventListener("DOMContentLoaded", () => {
  const pageHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > (pageHeight * 45 / 100)) {
      let scrollBox = document.querySelector(".chevup");
      scrollBox.style.opacity = "1";
      scrollBox.style.visibility = "visible";
    } else {
      let scrollBox = document.querySelector(".chevup");
      scrollBox.style.opacity = "0";
      scrollBox.style.visibility = "hidden";
    }
  });
});

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
