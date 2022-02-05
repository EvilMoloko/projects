$(document).ready(function(){
    $('.carousel__slider').slick({
        speed: 700,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1
              }
            }
          ]
    });
  });
              