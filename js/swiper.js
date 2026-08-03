new Swiper(".serviceSwiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    581: {
      enabled: false,
    },
  },
});
