(function ($) {
$(document).ready(function(){

	///scrolltop
	jQuery(".top").click(function(){
		jQuery("html").animate({'scrollTop' : 0 }, 1000);
			return false;
		});
	jQuery(window).scroll(function(){
		var durotto = jQuery(window).scrollTop();
			if(durotto > 200){
				jQuery(".top").slideDown();
			}
			else {
				jQuery(".top").slideUp();		
			}
	});

	jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 10,
          	time: 1500
         });

    });
	//home-slider
	jQuery('.slider-active').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout:4000,
            dotsSpeed: 800,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
					loop: true,
					dots: false
                },
                600: {
                    items: 1,
                    nav: true,
					loop: true,
					dots: false
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    dots: false,
                    autoplaySpeed:350,
                    navSpeed:350
                }
            }
        });

	jQuery('.slider-active').on('translate.owl.carousel', function () {
            $('.this-item h2').removeClass('fadeInUp animated').hide();
            $('.this-item p').removeClass('fadeInUp animated').hide();
        });

        jQuery('.slider-active').on('translated.owl.carousel', function () {
            $('.this-item h2').addClass('fadeInUp animated').show();
            $('.this-item p').addClass('fadeInUp animated').show();

    });

	//team-slider
	$('.owl-carousel').owlCarousel({
			margin:25,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
			autoplay:true,
			dotsSpeed:300,
			navSpeed:300,
            autoplayTimeout:6500,
			autoplaySpeed:300,
			responsiveClass: true,
			responsive:{
				0:{
					items: 1,
					nav: false,
					dots: false,
					loop:true
				},
				400:{
					items: 2,
					nav: true,
					dots: false,
					loop:true
				},
				768:{
					items: 3,
					nav: true,
					loop:true,
					dots: false
				},
				1000:{
					items: 4,
					nav: true,
					loop:true,
					dots: false
				}
			}
			
			
			
		});

	//servicepage-header-slider
	jQuery('.service-carousel').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout:4000,
            dotsSpeed: 800,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
					loop: true,
					dots: false,
					autoplaySpeed:400,
                    navSpeed:400
                },
                600: {
                    items: 1,
                    nav: false,
					loop: true,
					dots: false,
					autoplaySpeed:400,
                    navSpeed:400
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    dots: false,
                    autoplaySpeed:400,
                    navSpeed:400
                }
            }
        });

    jQuery('.service-carousel').on('translate.owl.carousel', function () {
            $('.this-item h2').removeClass('fadeInUp animated').hide();
        });

        jQuery('.service-carousel').on('translated.owl.carousel', function () {
            $('.this-item h2').addClass('fadeInUp animated').show();
    });

	// Animation in animate.css
		new WOW().init();

		$('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({
            'overflow': 'visible'
        });
 });
})(jQuery);	