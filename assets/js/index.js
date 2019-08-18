

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
    slidesPerView: 1,
    loop: true,
    observer: true,
    loopedSlides: 7,
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

  checkWidth();

  $(window).resize(() => {checkWidth(); console.log('resizing')});

  $('.swiper-slide').on('click', function() {
    $('body').append('<div class="zoomable">hello</div>');   
  })
});