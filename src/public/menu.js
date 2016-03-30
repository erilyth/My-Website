var menuState = 0;
var noSizeChange = 0;

$( window ).resize(function() {
    if(menuState == 0){
        noSizeChange = 1;
    }
    menuState = 1;
    updateMenuItems();
});

function updateMenuItems() {
    console.log("MENU BUTTON CLICKED");
    if (menuState == 0) {
        menuState = 2;
        var imgs=$('.menuIcon');
        var angle=(360/imgs.size())*(3.14/180);
        var cur_angle=(3.14/180)*180-angle;
        imgs.each(function(){
            $(this).css({
                'display': 'block',
                'top': '73%',
                'left': '51%'
            })
            var height = $(this).height();
            var width = $(this).width();
            var xshift = 100*Math.sin(cur_angle);
            var yshift = 100*Math.cos(cur_angle);
            var left = $(this).position().left + xshift;
            var top = $(this).position().top + yshift;
            console.log(cur_angle,xshift,yshift);
            $(this).animate({
                left: left - height/2,
                top: top - height/2,
                height: 2*height
            })
            cur_angle += angle;
        });
        setTimeout(function (){
            menuState = 1;
        },400);
    }
    else if (menuState == 1) {
        menuState = 2;
        var multiplier = 1;
        if(noSizeChange){
            noSizeChange = 0;
            multiplier = 2;
        }
        var imgs=$('.menuIcon');
        var angle=(360/imgs.size())*(3.14/180);
        var cur_angle=(3.14/180)*180-angle;
        imgs.each(function(){
            var height = $(this).height();
            var width = $(this).width();
            var xshift = 100*Math.sin(cur_angle);
            var yshift = 100*Math.cos(cur_angle);
            var left = $(this).position().left - xshift;
            var top = $(this).position().top - yshift;
            console.log(cur_angle,xshift,yshift);
            $(this).animate({
                left: left + height/4,
                top: top + height/4,
                height: (height)*(multiplier/2)
            })
            cur_angle += angle;
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