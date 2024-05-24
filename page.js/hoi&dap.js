let activeInfo = null;
function toggleInfo(infoIndex) {
  const infoContainer = document.getElementById(`infoContainer${infoIndex}`);
  const button = document.querySelector(
    `.custom-button:nth-child(${infoIndex * 2 - 1})`
  );

  if (activeInfo === infoIndex) {
    infoContainer.style.maxHeight = null;
    activeInfo = null;
    button.classList.remove("clicked");
  } else {
    if (activeInfo !== null) {
      const prevInfoContainer = document.getElementById(
        `infoContainer${activeInfo}`
      );
      const prevButton = document.querySelector(
        `.custom-button:nth-child(${activeInfo * 2 - 1})`
      );

      prevInfoContainer.style.maxHeight = null;
      prevButton.classList.remove("clicked");
    }
    infoContainer.style.maxHeight = infoContainer.scrollHeight + "px";
    activeInfo = infoIndex;
    button.classList.add("clicked");
  }
}
let activeIcon = null;

function toggleIcon(iconContainer) {
  if (activeIcon !== null && activeIcon !== iconContainer) {
    resetIcon(activeIcon);
  }

  let isActive = iconContainer.classList.toggle("active");
  activeIcon = isActive ? iconContainer : null;

  const icons = iconContainer.querySelectorAll("i");
  if (isActive) {
    icons[0].style.display = "none";
    icons[1].style.display = "inline-block";
  } else {
    icons[0].style.display = "inline-block";
    icons[1].style.display = "none";
  }
}

function resetIcon(iconContainer) {
  iconContainer.classList.remove("active");
  const icons = iconContainer.querySelectorAll("i");
  icons[0].style.display = "inline-block";
  icons[1].style.display = "none";
}
