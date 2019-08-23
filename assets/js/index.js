let swiper = null;

$( document ).ready(function() {
  $('.menu').on('click', function() {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('menu-open');

    if ($('.menu').hasClass('active')) {
      $("body").css("overflow-y","hidden");
    } else {
      $("body").css("overflow-y","auto");
    }
    
  });

  $('.nav-link').on('click', function() {
    $('.overlay').toggleClass('menu-open');
    $('.menu').toggleClass('active');
  });

  $('.main-btn').on('click', function() {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#examples').offset().top + 'px'
    }, 10);
  });

  $('.main-about__video-btn').on('click', function() {
    event.preventDefault();
    if ($(this).hasClass('pressed')) {
      $('.main-about__video-container').removeClass('main-about__video-container--visible');
      $(this).removeClass('pressed');
      $(this).html('Видео');
      document.getElementById('main-video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else {
      $('.main-about__video-container').addClass('main-about__video-container--visible');
      $(this).addClass('pressed');
      $('.main-about__video-btn.pressed').html('Cкрыть');
    }
  });

  $('.main-maxhaust__btn').on('click', function() {
    event.preventDefault();
    if ($(this).hasClass('pressed')) {
      $('.main-maxhaust__text').addClass('main-maxhaust__text--hidden');
      $(this).removeClass('pressed');
      $(this).html('Читать');
    } else {
      $('.main-maxhaust__text.main-maxhaust__text--hidden').removeClass('main-maxhaust__text--hidden');
      $(this).addClass('pressed');
      $('.main-maxhaust__btn.pressed').html('Cвернуть');
    }
  });

  $('.main-questions__btn').on('click', function() {
    event.preventDefault();
    if ($(this).hasClass('pressed')) {
      $('.main-questions__text').addClass('main-questions__text--hidden');
      $(this).removeClass('pressed');
      $(this).html('Далее');
    } else {
      $('.main-questions__text.main-questions__text--hidden').removeClass('main-questions__text--hidden');
      $(this).addClass('pressed');
      $('.main-questions__btn.pressed').html('Cвернуть');
    }
  });

  $('.input--tel').on('focus', function() {
    $(this).attr('placeholder', '+375-(xx)-xxx-xx-xx');
  })

  $('.input--tel').on('focusout', function() {
    $(this).attr('placeholder', 'Телефон');
  })

  swiperGal = new Swiper('.swiper-container.swiper-container-gallery', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    loopedSlides: 16,
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination.swiper-pagination-gallery',
    },
  });

  let swiperVid = new Swiper('.swiper-container.swiper-container-videos', {
    pagination: {
      el: '.swiper-pagination.swiper-pagination-videos',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let swiperAdvantages = new Swiper('.swiper-container.swiper-container-advantages', {
    direction: 'vertical',
    centeredSlides: true,
    slidesPerView: 1,
  });


  checkWidth();

  $('.swiper-slide.swiper-slide-gallery').click(function() {
    if ($(event.target).hasClass('swiper-slide-active')) {
      $('.zoomable').addClass('zoomable--active');
      $('.zoomable-image').attr('src', event.target.style.backgroundImage.split('("')[1].split('")')[0]);
      $("body").css("overflow-y","hidden");
    }
  })
  
  $('.zoomable').click(function() {
    $('.zoomable').removeClass('zoomable--active');
    $("body").css("overflow-y","auto");
  })
});



$(window).resize(checkWidth);

function checkWidth() {
  let windowsize = $(document).width();

  if (windowsize < 1024) {
    swiperGal.params.slidesPerView = 1;
    swiperGal.update();
  }

  if (windowsize >= 1024) {
    swiperGal.params.slidesPerView = 2;
    swiperGal.update();
  } 
  
  if (windowsize >= 1377) {
    swiperGal.params.slidesPerView = 3;
    swiperGal.update();
  } 
}