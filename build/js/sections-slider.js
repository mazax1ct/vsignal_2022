$(document).ready(function () {
  if($('body').width() > 991) {
    var sectionsSlider = new Swiper(
      '.js-sections-slider', {
        slidesPerView: 'auto',
        spaceBetween: 0
    });
  }
});
