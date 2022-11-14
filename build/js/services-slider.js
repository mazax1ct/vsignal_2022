const servicesSlider = new Swiper(
  '.js-services-slider', {
    /*slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,*/

    //slidesOffsetBefore: '12',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    slidesPerView: 'auto',
    effect: "creative",
    grabCursor: false,
    watchSlidesProgress: true,
    creativeEffect: {
      perspective: true,
      limitProgress: 2,
      shadowPerProgress: true,
      prev: {
        shadow: false,
        translate: ["-10%", 0, -200],
        rotate: [0, 0, -2]
      },
      next: {
        shadow: false,
        translate: ["104%", 0, 0]
      }
    },
    speed: 300,
    observer: true,
    observeParents: true,
    breakpoints: {
      1900: {
        noSwiping: false
      }
    }
});
