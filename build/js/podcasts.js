

var podcastsSlider;

$(document).ready(function () {
  podcastsSlider = new Swiper(
    '.js-podcasts', {
      observer: true,
      observeSlideChildren: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      freeMode: true,
      pagination: {
        clickable: true,
      }
  });

  var filter = $('.podcasts-gallery__filter-button.is-active').attr('data-filter');

  if(filter) {
    $('.js-podcasts .swiper-slide').css('display', 'none');
    $('.js-podcasts .swiper-slide[data-filter="'+ filter +'"]').css('display', '');

    podcastsSlider.slideTo(0);
    podcastsSlider.update();
  }
});

$(document).on('click', '.podcasts-gallery__filter-button', function () {
  $('.podcasts-gallery__filter-button').removeClass('is-active');
  $(this).addClass('is-active');

  var filter = $(this).attr('data-filter');

  $('.js-podcasts .swiper-slide').css('display', 'none');
  $('.js-podcasts .swiper-slide[data-filter="'+ filter +'"]').css('display', '');

  podcastsSlider.slideTo(0);
  podcastsSlider.update();

  return false;
});
