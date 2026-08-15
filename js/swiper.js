new Swiper(".serviceSwiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    481: {
      enabled: false,
    },
  },
});
