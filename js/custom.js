var vph = 0;
var headheight = 0;

$(document).ready(function(){
    vph = $(window).height();
    headheight = $('header').outerHeight();
    console.log(headheight);
    
    $('#content a').fluidbox();
    
    $('#down-arrow').click(function(e){
            $('body, html').animate({scrollTop:$('#content').offset().top - 100 + 'px'}, '700', 'swing');
    });
    
    
    $('#title').css({
        marginTop: vph/2-headheight/3
    });
    
    $('header').css('minHeight', vph);
    //intro();		

    
    //close modals
    $('.close').click(function(e){
        $(this).parent().removeClass('active');
        e.stopPropagation();
    });
    
    $(document).keyup(function(e) {
      if (e.keyCode == 27) { 
          $('#gallery li').removeClass('active');
      }   // esc
    });
});
