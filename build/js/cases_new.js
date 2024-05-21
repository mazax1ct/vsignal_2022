$(document).on('click', '.case-accordion__toggler', function() {
  if(!$(this).hasClass('is-active')){
    $('.cases-accordions').find('.case-accordion__body:visible').slideToggle();
    $('.case-accordion__toggler').removeClass('is-active');
    $(this).addClass('is-active');
    var that = $(this).closest('.case-accordion');
    that.find('.case-accordion__body').slideDown(function () {
      var topOffset = that.offset().top - $('.header').height() - 50;
      $('html, body').animate({
        scrollTop: topOffset
      }, 300);
    });
  }else{
    $(this).closest('.case-accordion').find('.case-accordion__body').slideUp();
    $(this).removeClass('is-active');
  }
  return false;
});

$(document).ready(function () {
  if($('.js-new-cases-slider').length){
    $('.js-new-cases-slider').each(function(index) {
      var slidesCount = $(this).find('.swiper-slide').length;
      $('.js-new-cases-slider-pagination[data-id="'+$(this).attr('data-id')+'"]').text('1 / '+ slidesCount);

      var slider = new Swiper($(this)[0], {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.js-new-cases-slider-next[data-id="'+$(this).attr('data-id')+'"]',
          prevEl: '.js-new-cases-slider-prev[data-id="'+$(this).attr('data-id')+'"]',
        }
      });

      slider.on('slideChange', function () {
        var block = slider.el.dataset.id;
        $('.js-new-cases-slider-pagination[data-id="'+block+'"]').text(slider.realIndex + 1 + ' / ' + slidesCount);
      });
    });
  }
});
