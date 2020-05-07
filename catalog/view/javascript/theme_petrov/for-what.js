$(document).ready(function () {
  const breakpoint = window.matchMedia( '(min-width:768px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if ( breakpoint.matches === false ) {

      // fire small viewport version of swiper
      return enableSwiper();

    }

  };

  const enableSwiper = function() {

    mySwiper = new Swiper('.for-what__swiper', {
      loop: true,
      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });

  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();
});