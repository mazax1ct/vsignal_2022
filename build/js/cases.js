var cases;

$(document).ready(function () {
  if($('body').width() > 1023) {
    cases = new Swiper(
      ".js-cases", {
        observer: true,
        observeSlideChildren: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true
    });

    var filter = $('.cases__filter-button.is-active').attr('data-filter');

    $('.js-cases .swiper-slide').css('display', 'none');
    $('.js-cases .swiper-slide[data-filter="'+ filter +'"]').css('display', '');

    $('.case').removeClass('is-open');
    $('.js-cases').find('.swiper-slide:visible:first').find('.case').addClass('is-open');

    cases.slideTo(0);

    setTimeout(function() {
      cases.update();
    },600);
  }
});

$(document).on('click', '.case__title-block', function () {
  var that = $(this);
  if($('body').width() < 1024) {
    if(!that.parent('.case').hasClass('is-open')) {
      $('.case').removeClass('is-open');
      setTimeout(function() {
        var topOffset = that.offset().top - $('.header').height();
        $('html, body').animate({
          scrollTop: topOffset
        }, 300);
        setTimeout(function() {
          that.parent('.case').addClass('is-open');
        },300);
      },1000);
    }
  } else {
    $('.case').removeClass('is-open');
    that.parent('.case').addClass('is-open');
  }
  return false;
});

$(document).on('click', '.cases__filter-button', function () {
  $('.cases__filter-button').removeClass('is-active');
  $(this).addClass('is-active');

  var filter = $(this).attr('data-filter');

  $('.js-cases .swiper-slide').css('display', 'none');
  $('.js-cases .swiper-slide[data-filter="'+ filter +'"]').css('display', '');

  $('.case').removeClass('is-open');
  $('.js-cases').find('.swiper-slide:visible:first').find('.case').addClass('is-open');

  cases.slideTo(0);

  setTimeout(function() {
    cases.update();
  },600);

  return false;
});
