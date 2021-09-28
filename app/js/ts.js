$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides:1,
        slideMargin: 40,
        infiniteLoop:true,
        minSlides:1,
        maxSlides:1,
        speed:1200,
    });
    
    $('#work').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
  
})







