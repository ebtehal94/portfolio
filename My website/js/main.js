/* golbal $ */
$(function () {
    
    'use strict';
    
    $('.menu-toggle').click(function() {
		$('.menu-toggle').toggleClass('.current');
        $('nav').toggleClass('.current');
		
	});
    
    

    
    //Scroll To Top
    
    $(window).scroll(function() {
        
        if($(this).scrollTop() > 300 ){
            
            $('.scroll-to-top').fadeIn();
            
        } else{
            
            $('.scroll-to-top').fadeOut();
        }
        
    });
    
    $('.scroll-to-top').on('click', function() {
        
        $('html , body').animate ({
            
            scrollTop : 0
        });
        
    });
    
     // Fixed Navbar
    
    $(window).on('scroll', function() {
        if($(window).scrollTop() ){
            $('.header') .addClass('fixed');    
        }
        
        else {
            $('.header') .removeClass('fixed'); 
        }
       
    });
    
    
    //Smoothily to Element
    
      $('nav li a').click(function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

        }, 1000);

    });
    
      //Add Active Class On Navbar Link And Remove From Siblings

    $('nav li a').click(function () {

        $('nav a').removeClass('active');

        $(this).addClass('active');
        
    });
    
     // Type Write Effects
    
   /* var theText = $('.typer').data('text'),
        
        theTextLength = theText.length,
        
        n = 0,
        
        theTyper = setInterval(function(){
            
            $('.typer').each(function(){
                $(this).html($(this).html() +theText[n]);
            });
            n += 1;
            
            if (n === theTextLength) {
                clearInterval(theTyper);
            }
            
        },100); */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});