$(window).scroll(function(){

   // $('.mobile-navbar').css({'opcity':'0'});

    if ($(this).scrollTop() > 50) {
       $('.mobile-navbar').css({'opacity':'1'});
    } else {
       $('.mobile-navbar').css({'opacity':'0'});
    }
});