const podcastsSlider = new Swiper(
  '.js-podcasts-slider', {
    loop: true,

    navigation: {
      nextEl: '.podcasts-slider__next',
      prevEl: '.podcasts-slider__prev',
    },

    slidesPerView: 1,
    spaceBetween: 12,

    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 16
      },
    }
});
