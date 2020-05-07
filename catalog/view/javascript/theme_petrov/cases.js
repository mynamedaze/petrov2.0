$(document).ready(function () {
  setTimeout(function () {
    var cases = document.getElementById('cases-id');
    $(cases).removeClass('disable');

    // $('.cases__swiper-link--template').fancybox();
    // $('.cases__swiper-link--custom').fancybox();

    var swiperCasesTemplates = new Swiper('.cases__swiper--template', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      scrollbar: {
        el: '.cases__swiper-scrollbar--template',
        hide: false,
      },
      navigation: {
        nextEl: '.swiper-button-next--template',
        prevEl: '.swiper-button-prev--template',
      }
    });

    var swiperCasesCustom = new Swiper('.cases__swiper--custom', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      scrollbar: {
        el: '.cases__swiper-scrollbar--custom',
        hide: false,
      },
      navigation: {
        nextEl: '.swiper-button-next--custom',
        prevEl: '.swiper-button-prev--custom',
      }
    });

    var casesToggleTemplate = document.getElementsByClassName('cases__toggle--template');
    var casesToggleCustom = document.getElementsByClassName('cases__toggle--custom');

    var casesSliderTemplate = document.getElementsByClassName('cases__slider-container--template');
    var casesSliderCustom = document.getElementsByClassName('cases__slider-container--custom');

    $(casesToggleTemplate).click(function () {

      $(casesToggleTemplate).addClass('active');
      $(casesToggleCustom).removeClass('active');

      $(casesSliderTemplate).removeClass('visually-hidden2');
      $(casesSliderCustom).addClass('visually-hidden2');
    });

    $(casesToggleCustom).click(function () {
      $(casesToggleTemplate).removeClass('active');
      $(casesToggleCustom).addClass('active');

      $(casesSliderTemplate).addClass('visually-hidden2');
      $(casesSliderCustom).removeClass('visually-hidden2');
    });
  }, 3000);
});