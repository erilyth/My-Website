$(window).scroll(function() {
	if ($(this).scrollTop() > 0){
		$('#heading').addClass("sticky2");
    	$('#heading').addClass("sticky", 200);
    	$('.subheading').addClass("sticky");
    	$('.subheadingcontent').addClass("sticky");
    	$('#menucontainer').addClass("sticky", 200);
    	$('img.menuButton').addClass("sticky", 200);
  	}
  	else{
  		$('#heading').removeClass("sticky2");
    	$('#heading').removeClass("sticky", 200);
    	$('.subheading').removeClass("sticky");
    	$('.subheadingcontent').removeClass("sticky");
  		$('#menucontainer').removeClass("sticky", 200);
    	$('img.menuButton').removeClass("sticky", 200);
  	}
});


$(function () {
  $('.cover').crossfade({
  		start: 'Images/development.jpg',
  		end: 'Images/developmentblur.jpg',
  		backgroundPosition: 'center center',
  		threshold: 0.2
  });
});