const menu = document.querySelector("#menu");
const menuMobile = document.querySelector("#menuMobile");
const navOpen = document.querySelector("#nav-open");
const navClose = document.querySelector("#nav-close");
const navbarWrapper = document.querySelector("#navbarWrapper");
const toTop = document.querySelector("#to-top");
const openPU = document.querySelector("#popup-open");
const closePU = document.querySelector("#popup-close");

// Popup Close
closePU.addEventListener("click", () => {
  openPU.classList.add("hidden");
});

// Navbar Scroll
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

// Hamburger Menu
menu.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
  navOpen.classList.toggle("hidden");
  navClose.classList.toggle("hidden");
  navbarWrapper.classList.remove("blur-navbar");
  navbarWrapper.classList.add("bg-dark");
});

menuMobile.addEventListener("click", () => {
  menuMobile.classList.add("hidden");
  navOpen.classList.remove("hidden");
  navClose.classList.add("hidden");
});
