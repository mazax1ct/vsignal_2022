//вычисляем ширину скроллбара
function scrollBarWidth() {
  var scrollBarWidth = window.innerWidth-$(document).width();

  if(scrollBarWidth > 0) {
    $('body').addClass('compensate-for-scrollbar');
    $('head').append('<style id="menu-open" type="text/css">.compensate-for-scrollbar{padding-right:'+scrollBarWidth+"px;}</style>")
  }
}

var header = $('.header'),
    scrollPrev = 0;

var resize_scroll = function(e) {
	var scrolled = $(window).scrollTop();

  if ( scrolled > $('.header').height()*2 ) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}

	if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

$(document).on('click', '.js-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    scrollBarWidth();
    $(this).addClass("is-active");
    $(this).attr('title', 'Закрыть меню');
    $('body').addClass('overflow');
    $('.main-menu').css("display", "flex").hide().fadeIn(300, function() {
      setMenuFontSize();
      setTimeout(function() {
        $('.main-menu').addClass("is-active");
      },300);
    });
  }else{
    $(this).removeClass("is-active");
    $(this).attr('title', 'Открыть меню');
    $('body').removeClass('overflow');
    $('.main-menu').removeClass("is-active");
    setTimeout(function() {
      $('.main-menu').fadeOut();
      setTimeout(function() {
        $('#menu-open').remove();
        $('body').removeClass('compensate-for-scrollbar');
      },100);
    },300);
  }
  return false;
});

$(window).resize(function() {
  setMenuFontSize();
});

$(window).on("orientationchange", function() {
  setMenuFontSize();
});

//расчет размера шрифта в главном меню
function setMenuFontSize() {
  if($('body').width() > 1199) {
    var mH = $('.main-menu').height() - $('.main-menu__bottom').height() - 60;

    var listLength = $('.main-menu__list-item').length;

    var lineHeight = mH/listLength;

    if(lineHeight > 108) {
      lineHeight = 108;
    }

    var fontSize = lineHeight*0.65;

    $('.main-menu__nav').css('font-size', fontSize).css('line-height', lineHeight+'px');
  }
}
