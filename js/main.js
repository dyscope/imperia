$(document).ready(function() {
	$('select').niceSelect();

	$(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

	 $('.cat-menu a').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
			  scrollTop: target.offset().top
			}, 500);
		}
	});
	
	$('.top_slider, .project-slider, .reviews-slider').show();
	$('.top_slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1
	});
	$('.project-slider').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1
	});
	$('.reviews-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.revi-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 528,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.fadebox').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		cssEase: 'linear',
		arrows: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.fadebox',
		infinite: true,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
			breakpoint: 575,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});


	$('.step1 li').click(function() {
		$('.step1').hide();
		$('.step2').fadeIn();
	});

	if ($(window).width() > 528) {
		$('.has-child').on('mouseover',function(e){
			if($(this).has('ul').length) {
			  $(this).parent().addClass('expanded');
			}
			$('ul:first',this).parent().find('> a').addClass('opened');
			$('ul:first',this).show();
		}).on('mouseout',function(e){
			$(this).parent().removeClass('expanded');
			$('ul:first',this).parent().find('> a').removeClass('opened');
			$('ul:first', this).hide();
		});
	}else {
		$('.has-child').on('click',function(e){
			e.preventDefault();
			$('.nav-sidebar li').removeClass('expanded');
			$('.has-child').not($(this)).find('ul').slideUp('normal');
			$('.has-child').not($(this)).find('a').removeClass('opened');
			if($(this).has('ul').length) {
			  $(this).addClass('expanded');
			}
			$('ul:first',this).parent().find('> a').toggleClass('opened');
			$('ul:first',this).slideToggle('normal');
		});
	}


	$('.has-child > ul > li:has(ul)').addClass("dropdown");
	$('.dropdown a').click(function() {
	    var checkElement = $(this).next();
	    $('.has-child > ul > li').removeClass('active');
	    $(this).closest('li').addClass('active');	
	    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
	      $(this).closest('li').removeClass('active');
	      checkElement.slideUp('normal');
	    }
	    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
	      $('.has-child > ul ul:visible').slideUp('normal');
	      checkElement.slideDown('normal');
	    }
	    if (checkElement.is('ul')) {
	      return false;
	    } else {
	      return true;	
	    }		
	});

	var menuLeft = document.getElementById( 'customScrollbar' ),
		showLeft = document.getElementById( 'showLeft' );

	showLeft.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( menuLeft, 'cbp-spmenu-open' );
		disableOther( 'showLeft' );
	};

	function disableOther( button ) {
		if( button !== 'showLeft' ) {
			classie.toggle( showLeft, 'disabled' );
		}
	}


	$('#filterOptions li a').click(function() {
		var ourClass = $(this).attr('class');
		$('#filterOptions li').removeClass('active');
		$(this).parent().addClass('active');
		if(ourClass == 'all') {
			$('#ourHolder').children('div.item').show();	
		}
		else {
			$('#ourHolder').children('div:not(.' + ourClass + ')').hide();
			$('#ourHolder').children('div.' + ourClass).show();
		}
		return false;
	});

	var fileInput  = document.querySelector( ".input-file" ),  
	    button     = document.querySelector( ".input-file-trigger" ),
	    the_return = document.querySelector(".file-return");

	if(button){
		button.addEventListener( "keydown", function( event ) {  
		    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
		        fileInput.focus();  
		    }  
		});
		button.addEventListener( "click", function( event ) {
		   fileInput.focus();
		   return false;
		});  
		fileInput.addEventListener( "change", function( event ) {  
		    the_return.innerHTML = this.value;  
		});
	}

	$(".drop").click(function(e) {
		e.preventDefault();
		$(".fdropdown").slideToggle('fast');
	});

	$(".slider-range").slider({
		range: true,
		orientation: "horizontal",
		min: 100,
		max: 1000,
		values: [100, 1000],
		step: 1,
		slide: function (event, ui) {
			if (ui.values[0] == ui.values[1]) {
			  return false;
			}
			$(this).parent().find(".min_price").text(ui.values[0]);
			$(this).parent().find(".max_price").text(ui.values[1]);
		}
	});
	$(".slider-range2").slider({
		range: true,
		orientation: "horizontal",
		min: 1000000,
		max: 100000000,
		values: [1000000, 100000000],
		step: 10,
		slide: function (event, ui) {
			if (ui.values[0] == ui.values[1]) {
			  return false;
			}
			$(this).parent().find(".min_price").text(ui.values[0]);
			$(this).parent().find(".max_price").text(ui.values[1]);
		}
	});
});

(function($){
	$(window).on("load",function(){
		
		$("#customScrollbar").mCustomScrollbar({
			autoHideScrollbar: true,
			theme: "minimal",
			scrollInertia: 300
		});
		
	});
})(jQuery);