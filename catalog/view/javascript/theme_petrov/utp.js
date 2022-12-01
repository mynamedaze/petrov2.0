$(document).ready(function () {
  var swiperUtp = new Swiper('.utp__swiper', {
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $('.bixed__button').click(function () {
    $('.bixed__desktop').toggleClass('bixed__desktop--active');
  });
});