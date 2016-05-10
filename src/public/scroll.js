$(window).scroll(function() {
	if ($(this).scrollTop() > 0){
    	$('.heading').addClass("sticky");
    	$('.subheading').addClass("sticky");
    	$('.subheadingcontent').addClass("sticky");
    	$('#menucontainer').addClass("sticky");
    	$('img.menuButton').addClass("sticky");
  	}
  	else{
    	$('.heading').removeClass("sticky");
    	$('.subheading').removeClass("sticky");
    	$('.subheadingcontent').removeClass("sticky");
  		$('#menucontainer').removeClass("sticky");
    	$('img.menuButton').removeClass("sticky");
  	}
});