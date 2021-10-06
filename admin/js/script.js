$( document ).ready(function() {

    $('.menuButO').click(function() {
        // $('.sidenav').css({"width": "70%", "height": "100%"});
        $('.sidenav').removeClass('d-none');
        $('.sidenav').animate({
            height: '100%',
            width: '70%'
        });
        
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

    $('.stop-propagation').on('click', function(event){
        event.stopPropagation();
    });


    $('.input-images').imageUploader({
        label: "اسحب وأفلت الصور هنا، أو اضغط لتصفح الصور"
    });



    });