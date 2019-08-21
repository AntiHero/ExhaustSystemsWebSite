let swiper = null;

$( document ).ready(function() {
  $('.menu').on('click', function() {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('menu-open');
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

  swiperGal = new Swiper('.swiper-container.swiper-container-gallery', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    slidesPerView: 7,
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    zoom: {
      maxRatio: 3,
      containerClass: 'swiper-zoom-container',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  swiperVid = new Swiper('.swiper-container.swiper-container-videos', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  checkWidth();

  $('.swiper-slide.swiper-slide-gallery').click(function() {
    console.log(event.target.style.backgroundImage);
    if ($(event.target).hasClass('swiper-slide-active')) {
      $('.zoomable').addClass('zoomable--active');
      $('.zoomable-image').attr('src', event.target.style.backgroundImage.split('("')[1].split('")')[0]);
    }
  })
  
  $('.zoomable').click(function() {
    $('.zoomable').removeClass('zoomable--active');
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