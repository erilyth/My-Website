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
  		start: 'Images/development.png',
  		end: 'Images/developmentblur.png',
  		backgroundPosition: 'center center',
  		threshold: 0.2
  });
  $('.contact').crossfade({
      start: 'Images/background.png',
      end: 'Images/background.png',
      backgroundPosition: 'center center',
      threshold: 0.2
  });
  $('.about').crossfade({
      start: 'Images/background.png',
      end: 'Images/background.png',
      backgroundPosition: 'center center',
      threshold: 0.2
  });
});

