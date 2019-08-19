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

  swiper = new Swiper('.swiper-container', {
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
    pagination: {
      el: '.swiper-pagination',
    },
  });

  checkWidth();

});

$(window).resize(checkWidth);

function checkWidth() {
  let windowsize = $(document).width();

  if (windowsize < 1024) {
    swiper.params.slidesPerView = 1;
    swiper.update();
  }

  if (windowsize >= 1024) {
    swiper.params.slidesPerView = 2;
    swiper.update();
  } 
  
  if (windowsize >= 1377) {
    swiper.params.slidesPerView = 3;
    swiper.update();
  } 
}