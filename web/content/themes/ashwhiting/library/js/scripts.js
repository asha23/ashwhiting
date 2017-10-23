// Base Javascript

// Suppress Lint semicolon warnings
/* jshint asi: true */

// Shards


jQuery(document).ready(function($) {

	causeRepaintsOn = $("h1, h2, h3, p");

	$(window).resize(function() {
	  causeRepaintsOn.css("z-index", 1);
	});

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

	// Kill widows
	// ============================================

	$(".widont").each(function() {
		var wordArray = $(this).text().split(" ");
		if (wordArray.length > 1) {
			wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];
			wordArray.pop();
			$(this).html(wordArray.join(" "));
		}
	});

	// Match height
	// ============================================

	$('.match').matchHeight({
		byRow: true,
	    property: 'height',
	    target: null,
	    remove: false
	});


	// Trianglify
	// ============================================

	cellsize = Math.floor(Math.random() * 200) + 50
	varia = Math.random();

	var pattern = Trianglify({
		variance:1,
		cell_size: cellsize,
		seed: null,
		x_colors: 'random',
		y_colors: 'match_x'
	});

	m = new XMLSerializer().serializeToString(pattern.svg());

	k = window.btoa(m)
	var element = $('.header_canvas');
	var make_svg_path = 'url(data:image/svg+xml;base64,' + k + ')';

	element.css('background', make_svg_path)

	// ScrollReveal
	// ============================================

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

	// Random Brighton Image
	// ============================================
	$('.random-image').hide();

	$('.random-image').css({
		'background-image' : 'url(https://source.unsplash.com/collection/631021/1600x900)'
	}).fadeIn(3000);

	// Logo fade
	// ===============

	$('.logo').hide();

	$('.logo').fadeIn(1000);







});
