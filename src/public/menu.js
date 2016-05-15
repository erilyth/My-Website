var menuState = 0;
var noSizeChange = 0;
var scrollState = 0;

$(window).resize(function() {
    //Hide the menu if it is currently visible
    if(menuState == 1) {
        updateMenuItems();
    }
});

function hideMenuWithScroll() {
    var menucontainer = $('#menucontainer')
    if (scrollState == 0){
        menucontainer.animate({
            'height': 64,
            'top': '30.5%'
        }, { queue: false, duration: 200 })
    }
    else {
        menucontainer.animate({
            'height': 64,
            'top': '50.5%'
        }, { queue: false, duration: 200 })   
    }
    if (menuState == 1){
        updateMenuItems();
        var imgs=$('.menuIcon');
        imgs.each(function() {
            $(this).css({
                'display': 'none'
            })
        });
    }
}

$(window).scroll(function() {
    if ($(this).scrollTop() > 0){
        if (scrollState == 0){
            //Scroll state has just changed
            hideMenuWithScroll();
        }
        scrollState = 1;
    }
    else{
        if (scrollState == 1){
            //Scroll state has just changed
            hideMenuWithScroll();
        }
        scrollState = 0;
    } 
});

function updateMenuItems() {
    console.log("MENU BUTTON CLICKED");
    if (menuState == 0) {
        //Reveal the menu
        menuState = 2;
        var imgs=$('.menuIcon');
        var menucontainer = $('#menucontainer');
        menucontainer.css({
            'display': 'block'
        })
        menucontainer.animate({
            height: (imgs.length+1)*64
        })
        var shift_cur = 0;
        imgs.each(function(){
            if(scrollState == 0){
                $(this).css({
                    'display': 'block',
                    'top': '53%',
                    'left': '30px'
                })
            }
            else{
                $(this).css({
                    'display': 'block',
                    'top': '33%',
                    'left': '30px'
                })
            }
            var height = $(this).height();
            var width = $(this).width();
            shift_cur += 60;
            var yshift = shift_cur;
            var top = $(this).position().top + yshift;
            var left = $(this).position().left;
            $(this).animate({
                top: top - height/2,
                left: left - width/2,                
                height: 2*height
            })
        });
        setTimeout(function (){
            menuState = 1;
        },400);
    }
    else if (menuState == 1) {
        //Hide the menu
        menuState = 2;
        var multiplier = 1;
        if(noSizeChange){
            noSizeChange = 0;
            multiplier = 2;
        }
        var imgs=$('.menuIcon');
        var menucontainer = $('#menucontainer')
        menucontainer.animate({
            height: 64
        })
        var shift_cur = 0;
        imgs.each(function(){
            var height = $(this).height();
            var width = $(this).width();
            shift_cur += 60;
            var yshift = shift_cur;
            var top = $(this).position().top - yshift;
            var left = $(this).position().left;
            $(this).animate({
                top: top + height/4,
                left: left + width/4,
                height: (height)*(multiplier/2)
            })
        });
        setTimeout(function (){
            imgs.each(function(){
                $(this).css({
                    'display': 'none'
                })          
            });
            menuState = 0;
        },400);
    }  
}