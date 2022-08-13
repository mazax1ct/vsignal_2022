const casesSlider = new Swiper('.js-cases-slider', {
  loop: true,

  navigation: {
    nextEl: '.cases-slider__next',
    prevEl: '.cases-slider__prev',
  },

  slidesPerView: 1,
  spaceBetween: 12,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 12
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    1900: {
      slidesPerView: 'auto',
      spaceBetween: 0
    }
  }
});
