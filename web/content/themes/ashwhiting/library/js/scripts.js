// Base Javascript

// Suppress Lint semicolon warnings
/* jshint asi: true */

// Shards


jQuery(document).ready(function($) {

	// Galleries
	// ============================================

	// Video

	$('.light-gallery-videos').lightGallery({
		selector: '.video-item',
		mode: 'lg-fade',
		youtubePlayerParams: {
			modestbranding: 1,
			showinfo: 0,
			rel: 0,
			controls: 1
		},
		vimeoPlayerParams: {
			byline : 0,
			portrait : 0,
			color : 'A90707'
		}
	});

	// Images

	$('.light-gallery-images').lightGallery({
		selector: '.gallery-item',
		mode: 'lg-fade'
	});

	// Element matching (matchheight.js)
	// ============================================


	// Navbar animated hamburger
	// ============================================

	$('.navbar-toggle').click(function() {
        $(this).children('div').toggleClass('active');
        $(this).toggleClass('active');
    });

	// Carousels
	// ============================================

	basic_carousel = $('.basic-carousel');
	advanced_carousel = $('.advanced-carousel');

	$('.basic-carousel').cycle({
		slides: "> .slide",
		fx: "scrollHorz",
		timeout:6000,
		pager: '.custom-page',
		swipe:true,
		speed:500,
		pauseOnHover:true,
	});

	$('.advanced-carousel').cycle({
		slides: "> .slide",
		fx: "scrollHorz",
		timeout:6000,
		pager: '.custom-page',
		swipe:true,
		speed:500,
		pauseOnHover:true,
	});


	$(".widont").each(function() {
		var wordArray = $(this).text().split(" ");
		if (wordArray.length > 1) {
			wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
			wordArray.pop();
			$(this).html(wordArray.join(" "));
		}
	});

	$('.match').matchHeight({
		byRow: true,
	    property: 'height',
	    target: null,
	    remove: false
	});

	// var canvas = $('#mycanvas');
	// ctx = canvas.getContext('2d');
	//
	// window.addEventListener('resize', resizeCanvas, false);
	//
	// function resizeCanvas() {
	// 	canvas.width = window.innerWidth;
	// 	canvas.height = window.innerHeight/2;
	// 	drawStuff
	// }
	//
	// resizeCanvas;
	//
	//
	//
	// function drawStuff() {
	//
	// }

	cellsize = Math.floor(Math.random() * 100) + 20

	var pattern = Trianglify({
		variance:1,
		cell_size: cellsize,
		seed: null,
		x_colors: 'random'
	});
	pattern.canvas(document.getElementById('mycanvas'));


});
