

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
  
  let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
});