// Ẩn hiện mật khẩu
document.addEventListener("DOMContentLoaded", function () {
  const eyeOffIcons = document.querySelectorAll(
    'ion-icon[name="eye-off-outline"]'
  );
  const eyeIcons = document.querySelectorAll('ion-icon[name="eye-outline"]');
  const passwordInputs = document.querySelectorAll('input[type="password"]');

  eyeOffIcons.forEach((eyeOffIcon, index) => {
    eyeOffIcon.addEventListener("click", function () {
      passwordInputs[index].type = "text";
      eyeOffIcon.style.display = "none";
      eyeIcons[index].style.display = "block";
    });
  });

  eyeIcons.forEach((eyeIcon, index) => {
    eyeIcon.addEventListener("click", function () {
      passwordInputs[index].type = "password";
      eyeOffIcons[index].style.display = "block";
      eyeIcon.style.display = "none";
    });
  });

  // Chuyển đổi giữa các biểu mẫu
  let createAccount = document.querySelector(".sign-in .register a");
  let haveAccount = document.querySelector(".sign-up .register a");

  let signInBox = document.querySelector("form.sign-in");
  let signUpBox = document.querySelector("form.sign-up");

  createAccount.addEventListener("click", function () {
    signInBox.classList.toggle("sign-in-click");
    signUpBox.classList.toggle("sign-up-click");
  });
  haveAccount.addEventListener("click", function () {
    signInBox.classList.toggle("sign-in-click");
    signUpBox.classList.toggle("sign-up-click");
  });
});

//MENU COLLLAPSE
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".nav-list ul");
  const header = document.querySelector(".header.container");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});
