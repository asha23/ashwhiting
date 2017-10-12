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


	cellsize = Math.floor(Math.random() * 100) + 20
	varia = Math.random();

	var pattern = Trianglify({
		variance:varia,
		cell_size: cellsize,
		seed: null,
		x_colors: 'random'
	});

	m = new XMLSerializer().serializeToString(pattern.svg());

	k = window.btoa(m)
	var element = $('.header_canvas');
	var make_svg_path = 'url(data:image/svg+xml;base64,' + k + ')';

	element.css('background', make_svg_path)

	// SCROLL REVEAL

	window.sr = ScrollReveal({reset:true});
	sr.reveal('.reveal', {
		scale:1,
		reset: false,
	});

	sr.reveal('.reveal-noslide', {
		scale:1,
		distance:0,
		reset: false,
	});






});
