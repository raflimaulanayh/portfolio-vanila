console.log("success");

const menu = document.querySelector("#menu");
const menuMobile = document.querySelector("#menuMobile");
const navbarWrapper = document.querySelector("#navbarWrapper");
const toTop = document.querySelector("#to-top");

window.onscroll = function () {
  if (window.scrollY > 1) {
    navbarWrapper.classList.add("blur-navbar");
    navbarWrapper.classList.remove("bg-dark");
  }
  switch (window.scrollY && window.scrollY) {
    case window.scrollY > 1:
      navbarWrapper.classList.add("blur-navbar");
      navbarWrapper.classList.remove("bg-dark");
      break;
    case window.scrollY < 1:
      navbarWrapper.classList.add("bg-dark");
      navbarWrapper.classList.remove("blur-navbar");
      break;
    case window.scrollY > 3000:
      toTop.classList.remove("hidden");
      break;
    case window.scrollY < 3000:
      toTop.classList.add("hidden");
      break;
    default:
      break;
  }
};

menu.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
  navbarWrapper.classList.remove("blur-navbar");
  navbarWrapper.classList.add("bg-dark");
});

menuMobile.addEventListener("click", () => {
  menuMobile.classList.add("hidden");
});
