var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  rewind: true,
  loop: true,
  //   rewind: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
