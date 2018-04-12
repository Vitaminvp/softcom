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
    
})
