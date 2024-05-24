//MENU
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    let headerContainer = document.querySelector(".header-container");
    let menuCollapse = document.querySelector(".menu-collapse");
  
    if (scrollPosition >= 200) {
      headerContainer.style.opacity = "0";
      headerContainer.visibility = "hidden";
  
      menuCollapse.style.opacity = "1";
      menuCollapse.style.visibility = "visible";
    } else {
      headerContainer.style.opacity = "1";
      headerContainer.visibility = "visible";
  
      menuCollapse.style.opacity = "0";
      menuCollapse.style.visibility = "hidden";
    }
  });

//MENU trên đt
document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector('.all-menu-box');
  menu.addEventListener('click', function () {
    let subMenu = document.querySelector('.submenu-collapse');
    let iconOpen = document.querySelector('.all-menu-box .open-menu');
    let iconClose = document.querySelector('.all-menu-box .close-menu');
    
    subMenu.classList.toggle('block');
    iconOpen.classList.toggle('size');
    iconClose.classList.toggle('size');
  });
});