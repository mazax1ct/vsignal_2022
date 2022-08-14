var slidePadding = parseInt($('.b-17__slider .swiper-slide').css('padding-left'));
var titlePadding = parseInt($('.b-17__title').css('padding-left'));
var sliderOffset = titlePadding - slidePadding;

const servicesSlider2 = new Swiper('.js-services-slider-2', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  freeMode: true,
  watchOverflow: true,
  edgeSwipeDetection: 'prevent',
  breakpoints: {
    768: {
      slidesOffsetBefore: sliderOffset,
      slidesOffsetAfter: sliderOffset
    }
  }
});

servicesSlider2.on('resize', function () {
  var slidePadding = parseInt($('.b-17__slider .swiper-slide').css('padding-left'));
  var titlePadding = parseInt($('.b-17__title').css('padding-left'));
  var sliderOffset = titlePadding - slidePadding;
  servicesSlider2.params.slidesOffsetBefore = sliderOffset;
  servicesSlider2.update();
});
