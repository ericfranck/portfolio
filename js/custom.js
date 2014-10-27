var vph = 0

$(document).ready(function(){
    vph = $(window).height();
    intro();		
});

function intro(){
    //set initial state 
    $('#title').css('marginTop',vph/2-90);
    $('#title').css('display','none');
    $('#content').css('display','none');
    open();
}

function open(){
    $('#title').fadeIn( "slow", function() {
        marginTop = '0';
        if (vph > 700){marginTop = '20%'}
        $('#title').animate({'marginTop':marginTop}, 500, function(){
            $('#content').fadeIn( "fast");
        });    
  });    
}