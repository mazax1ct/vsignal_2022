$(document).ready(function () {
  if($('body').width() > 991) {
    var sectionsSlider = new Swiper(
      '.js-sections-slider', {
        resistanceRatio: 0,
        slidesPerView: 'auto',
        spaceBetween: 0,
        //freeMode: true,
        //mousewheel: true,
        //sensitivity: 5.5,
        /*on: {
          slideChange: function() {
              setTimeout(function () {
                  sectionsSlider.params.mousewheel.releaseOnEdges = false;
              }, 500);
          },
          reachEnd: function() {
              setTimeout(function () {
                  sectionsSlider.params.mousewheel.releaseOnEdges = true;
              }, 750);
          }
        }*/
    });
  }
});
