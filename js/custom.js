var vph = 0;
var headheight = 0;

$(document).ready(function(){
    
    vph = $(window).height();
    headheight = $('header').outerHeight();
    
    $('#content a').fluidbox();
    
    $('#down-arrow').click(function(e){
            $('body, html').animate({scrollTop:$('#content').offset().top - 100 + 'px'}, '700', 'swing');
    });
      
    $('#title').css({
        marginTop: vph/2-headheight/3
    });
    
    $('header').css('minHeight', vph);

});
