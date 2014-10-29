var vph = 0;
var headheight = 0;

$(document).ready(function(){
    vph = $(window).height();
    headheight = $('header').outerHeight();
    console.log(headheight);
    $('#title').css({
        marginTop: vph/2-headheight/2
    });
    
    $('header, section').css('minHeight', vph);
    //intro();		
    $('#gallery li').click(function(){
        $(this).addClass('active');
    });
    
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
