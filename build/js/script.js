$(document).ready(function() {

	// To top
	$(window).scroll(function() {
		if ($(this).scrollTop() != 0)
			$('#to-top').fadeIn();
		else
			$('#to-top').fadeOut();
	});
	$('#to-top').click(function() {
		$('body, html').animate({
			scrollTop: 0}, 800);
	});

	//Popup for book-online
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',
		showCloseBtn: false
	});

	//Menu nav
	$('.nav-link').click(function() {
		var target = $(this).attr('href');

		if (target != '#popup-form') {
			$('html, body').animate({scrollTop: $(target).offset().top-70}, 800);
		}

		$('.nav-link').css({'color':'#000'});
		$(this).css({'color':'#f76293'});

		if (window.innerWidth <= 992) {
				$('nav').slideToggle(500);
				$('nav').css(
				{
					'display':'none'
				});

				$('.menu-icon i').removeClass('icon-close');
				$('.menu-icon i').addClass('icon-bars');
		}

		return false;
	});

	// Menu icon
	$('.menu-icon').click(function() {
		$('nav').slideToggle(500);
		$('nav').css(
		{
			'display':'flex'
		});

		if ($('.menu-icon i').hasClass('icon-bars')){
			$('.menu-icon i').removeClass('icon-bars');
			$('.menu-icon i').addClass('icon-close');
		} else {
			$('.menu-icon i').removeClass('icon-close');
			$('.menu-icon i').addClass('icon-bars');
		}
	});

	//Load More Results for portfolio
	$('.loadMore').loadMoreResults({
		displayedItems: 6,
		showItems: 6,
		button: {
			'class':'btn-load-more',
			'text':'View more'
		}
	});

	//Popup for image in portfolio
	$('.popup-with-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade',
		showCloseBtn: false
	});

	// Slick slider for testimonials
	$('.slider').slick({
		slidesToShow: 3,
		infinite: true,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		responsive: [
		{
			breakpoint: 992,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true
			}
		},
		{
			breakpoint: 576,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true
			}
		}]
	});

	// Inputmask for phone number in contact
	$('.phone').inputmask({"mask": "(999) 9999-9999"});

})