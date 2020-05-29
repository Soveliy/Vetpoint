// (function () {
//   var toggle = document.querySelector('.nav-toggle');
  
//   toggle.addEventListener('click', function(e) {
//     this.classList.toggle('opened');
//   });
// })();

$(".nav-toggle").click(function() {
  $(this).toggleClass("opened"); 
  $(".header__menu").slideToggle();
});

  $('.stock .swiper-container').each(function(){
    var events_slider = new Swiper(this, {
    loopedSlides:40,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay:false,
    loop:true,
    navigation: {
        nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
    },
    
  });
  });

  $('.services .swiper-container').each(function(){
    var events_slider = new Swiper(this, {
      slidesPerView: 'auto',
    loopedSlides:40,
    slidesPerView: 6,
    spaceBetween: 80,
    autoplay:true,
    navigation: {
        nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 80,
      },
      1800: {
        slidesPerView: 6,
        spaceBetween: 80,
      },
    } 
  });
  });
  $('.reviews .swiper-container').each(function(){
    var events_slider = new Swiper(this, {
      slidesPerView: 'auto',
    loopedSlides:40,
    slidesPerView: 1,
    spaceBetween: 80,
    autoplay:true,
    loop:true,
    navigation: {
        nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
    },
    
  });
  });

  var top_show = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('.button-up').fadeIn("300");
      else $('.button-up').fadeOut("300");
    });
    $('.button-up').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });


  

  
$('.call-block__button,.footer__button').click(function(){
  $("#call-modal").arcticmodal()
   });

   $(".numbox").mask("+7 (999) 999 99 99");


