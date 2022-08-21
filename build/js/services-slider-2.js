var sliderOffset = parseInt($('.b-17__title').css('padding-left'));

var swiperInstances = {};

$('.js-services-slider-2').each(function(index, element) {
    var $this = $(this);
    $this.addClass("instance-" + index);

    swiperInstances[index] = new Swiper(".instance-" + index, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      freeMode: true,
      slidesOffsetBefore: '12',
      slidesOffsetAfter: '12',
      observer: true,
      observeParents: true,
      breakpoints: {
        768: {
          slidesOffsetBefore: sliderOffset,
          slidesOffsetAfter: sliderOffset
        }
      }
    });

    swiperInstances[index].on('resize', function () {
      var sliderOffset = parseInt($('.b-17__title').css('padding-left'));
      swiperInstances[index].params.slidesOffsetBefore = sliderOffset;
      swiperInstances[index].update();
    });
});
