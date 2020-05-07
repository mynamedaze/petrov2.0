$(document).ready(function () {
  setTimeout(function () {
    var feedback = document.getElementById('feedback-id');
    $(feedback).removeClass('disable');
    var swiperFeedback = new Swiper('.feedback__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      scrollbar: {
        el: '.feedback__swiper-scrollbar',
        hide: false,
      },
      navigation: {
        nextEl: '.swiper-button-next--feedback',
        prevEl: '.swiper-button-prev--feedback',
      }
    });
  }, 5000);
});