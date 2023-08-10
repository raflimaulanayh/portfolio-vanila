const menu = document.querySelector("#menu");
const menuMobile = document.querySelector("#menuMobile");
const navbarWrapper = document.querySelector("#navbarWrapper");
const toTop = document.querySelector("#to-top");

window.onscroll = function () {
  if (window.scrollY > 1) {
    navbarWrapper.classList.add("blur-navbar");
    navbarWrapper.classList.remove("bg-dark");
  } else {
    navbarWrapper.classList.remove("blur-navbar");
    navbarWrapper.classList.add("bg-dark");
  }

  if (window.scrollY > 3000) {
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
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
