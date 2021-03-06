$(document).ready(function(){
	$('.promo__slider').slick({
		speed: 1200,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/smartphone_slider/arrow_left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/smartphone_slider/arrow_right.png"></button>',
	});

	$('.provides__slider').slick({
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/macbook_slider/arrow_left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/macbook_slider/arrow_right.png"></button>',
	});

	//Smooth scroll and pageup
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
});