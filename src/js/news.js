const newsSlider = new Swiper(
  ".js-news", {
    observer: true,
    observeSlideChildren: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    freeMode: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      1900: {
        slidesPerView: 'auto',
        spaceBetween: 0
      }
    }
});
