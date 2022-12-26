$(document).ready(function() {
    $('.reviews-slider').slick({
      infinite: true,
      speed: 500,
      prevArrow: $("#reviews-previous"),
      nextArrow: $("#reviews-next"),
      fade: true,
      swipe: false, 
      draggable: false,
      slidesToShow: 1,
      adaptiveHeight: true
    });
    
    $('.reviews-slider').on('afterChange', function(event, slick, currentSlide) {
      $('#reviews-number').text('0' + (currentSlide + 1));
    });
  
    //First slider
    $("#wwu-slider-1").slick({
      infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '10%',
      autoplaySpeed: 3500,
      responsive: [
          {
              breakpoint: 1024,
              settings: {slidesToShow: 3}
          },
          {
              breakpoint: 600, 
              settings: {slidesToShow: 2}
          }
      ]
    });
  
    //Second slider
    $("#wwu-slider-2").slick({
      infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '10%',
      autoplaySpeed: 3500,
      responsive: [
          {
              breakpoint: 1024,
              settings: {slidesToShow: 3}
          },
          {
              breakpoint:600, 
              settings: {slidesToShow: 2}
          }
      ]
    });
  });
