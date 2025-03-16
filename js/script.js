$(document).ready(function(){
$('.mobile-menu').hide();
$('.mobile-menu ul').hide();
$('.mobile-menu ul li i').hide();

//show mobile menu
$('.header .fa-bars').click(function(){
    $('.mobile-menu').removeClass('d-none');
$('.mobile-menu').slideDown(800);
$('.mobile-menu ul').slideDown(1000)
});

//close mobile menu
$('.closei').click(function(){
    $('.mobile-menu').slideUp(800);
    $('.mobile-menu ul').slideUp(1000)
    
});


//hover over  menu items
$('.mobile-menu ul li').hover(function(){
    $(this).children('i').fadeIn(200);
   
},function(){
    $(this).children('i').fadeOut(200);
    
});

//footer menu
if($(window).width() < 768){
    $('.link-cont ul').hide();
  }
$(window).resize(function(){
    if($(window).width() < 768){
      $('.link-cont ul').hide();
    }
});
$('.link-cont span').click(function(){

    $(this).next().slideToggle(400);
    $(this).children('i').toggleClass('fa-angle-down fa-angle-up')

});



});

