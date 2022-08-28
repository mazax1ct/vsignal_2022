$(document).ready(function () {
  if($('body').width() > 1023) {
    var about = new Swiper(
      '.js-about', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
    });
  }
});
