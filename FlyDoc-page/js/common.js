$(function() {
    $('.sota-slide').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
        
      arrows: true,
      //dots: true,
      infinite: true,
      speed: 300,
      //appendArrows: '.sota-arrows',
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
    
});
