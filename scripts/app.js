$(function(){
	
	var initialRoute = window.location.hash;
	
	if (initialRoute !== "" && initialRoute !== "#" && initialRoute !== "#/") {
		navigate(initialRoute, false);
	}
	
	window.onhashchange = function () {
		var hash = window.location.hash;
		navigate(hash, true);			
	};
	
	function navigate(route, animate) {
		route = route.replace("#", "");
		
		var duration = 500;
		if (animate == false)
			duration = 0;
		
		$("a.active").removeClass("active");
		$("a[href='#" + route + "']").addClass("active");	
		$("section.content.show").addClass("show").animate({'opacity' : 0}, {queue: false, duration: duration,
			complete: function() {
				$('section.content.show').hide();
				$('section#' + route).show();
				$('section#' + route).addClass('show').animate({'opacity' : 1}, {queue: false, duration: duration});
			}
		});
	}
	
	$('#maximage').maximage({
		cycleOptions: {
			fx: 'fade',
			speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
			timeout: 10000,
			prev: '#arrow_left',
			next: '#arrow_right',
			pause: 0
		},
		onFirstImageLoaded: function(){
			jQuery('#cycle-loader').hide();
			jQuery('#maximage').fadeIn('fast');
		}
	});

});