$(function(){
        
    $(window).on("load", function () {
                $(window).scroll(function () {
                    $(this).scrollTop() > $(this).height() ? $(".top_button").addClass("active") : $(".top_button").removeClass("active");
                }); 
                $(".top_button").click(function () {
                    $("html, body").stop().animate({scrollTop: 0}, "slow", "swing");
            });

         });

        $('.togglemenu').click(function(){
            $(this).toggleClass('active'); 
            $('.top_menu ul').slideToggle(400);
        });
        $('.slick').slick({
          arrows: false,
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
        });
    	$(window).scroll(function(){
        
            if(window.innerWidth > 768){
                let top = $('.top-menu').offset().top;
                $(window).scroll(function(){
                    if( $(window).scrollTop() > top) {
                        $('.top-menu').addClass('toTop');
                    }else{
                        $('.top-menu').removeClass('toTop');
                    }
                });
            }
	});
    
    
    
    
    
    
    
    $('.mymodal').hide().removeClass("hide");
	$('#order').click(function(e){
		e.preventDefault();
		$('.mymodal').fadeIn(200);
	});
	$('.mymodal, .times').click(function(e){
		e.preventDefault();
		if ($(e.target).hasClass('mymodal') || $(e.target).hasClass('times')){
				$('.mymodal').fadeOut(200);
		}
		e.stopPropagation();
	});
    
    
    
    
	$('a[href^="#"]').click(function(){
		let target = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 800);
	});
    
    
    
    
    
    
})
