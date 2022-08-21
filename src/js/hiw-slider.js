$(document).ready(function () {
  if($('body').width() > 767) {
    var hiw = new Swiper(
      '.js-hiw-slider', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
    });
  }
});
