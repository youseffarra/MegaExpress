$( document ).ready(function() {
    $('#m-search').click(function() {
        $('.search-form-wrapper').removeClass('d-none');
        $('.search-form-wrapper').toggleClass('d-block');
    });
    $('#c-search').click(function() {
        $('.search-form-wrapper').toggleClass('d-none');
        $('.search-form-wrapper').removeClass('d-block');
    });

    $('.img-slider').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        items: 1,
        
    });

    $('.cards-slider').owlCarousel({
        rtl:true,
        loop:true,
        nav:true,
        items: 5,
        dots: false,

        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2, 
            },
            // breakpoint from 480 up
            480 : {
                items: 2,
            },
            // breakpoint from 768 up
            768 : {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
        
    });


    $('.menuButO').click(function() {
        $('.sidenav').css({"width": "70%", "height": "100%"});
        $('.sidenav').removeClass('d-none');
    });
    $('.menuCloseBut').click(function() {
        $('.sidenav').css({"width": "0", "height": "0"});
        $('.sidenav').toggleClass('d-none');
    });



    $(window).scroll(function () {
		$(this).scrollTop() > 600 ? $('#goToTop').fadeIn() : $('#goToTop').fadeOut();
	}),
		$('#goToTop').click(function () {
			return $('html, body').animate({ scrollTop: 0 }, 500), !1;
    });


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    });