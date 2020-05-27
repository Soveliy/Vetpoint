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
      slidesPerView: 'auto',
    loopedSlides:40,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay:true,
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

  // $('.players__slider .swiper-container').each(function(){
  //   var events_slider = new Swiper(this, {
  //     watchOverflow:true,
  //     slidesPerView: 3,
  //   slidesPerGroup: 3,
  //   spaceBetween: 10,
  //   autoplay:true,
  //   loop:false,
  //   navigation: {
  //       nextEl: $(this).parent().find('.swiper-button-next'),
  //       prevEl: $(this).parent().find('.swiper-button-prev'),
  //   },
    
  //   breakpoints: {
  //       640: {
  //         slidesPerGroup: 2,
  //         spaceBetween: 20,
  //       },
  //       900: {
  //         slidesPerGroup: 3,
  //         spaceBetween: 20,
  //       },
  //       1200: {
  //         slidesPerGroup: 9,
  //         spaceBetween: 20,
  //         slidesPerView: 9,
  //       },
  //     } 
  // });
  // });




  


