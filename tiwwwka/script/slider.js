const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: false,

  // If we need pagination


  // Navigation arrows
  navigation: {
     nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },


  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      

});



$(function(){
 // фиксированая шапка
  let header = $('#header_scroll');
    let intro = $('#intro');
    let introHeight = intro.innerHeight()
    let scrollPos = $(window).scrollTop()
    let nav = $('#nav');
    let navToggle = $('#navToggle');


     checkScroll(scrollPos, introHeight); 

    $(window).on( "scroll  resize" , function() {
       let introHeight = intro.innerHeight();
      scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introHeight);      

      
    }); 

    function checkScroll(scrollPos, introHeight) {
       if (scrollPos > introHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

// Smoth Scroll
    $('[data-scroll]').on('click',  function(event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffSet = $(elementId).offset().top;

      nav.remove('show');
        
      $('html , body').animate({
        scrollTop:elementOffSet - 70 
      }, 700 )
    });


// navToggle
// ===================================================


$('#navToggle').on('click',  function(event) {
    event.preventDefault()

    nav.toggleClass('show');
    
});




});








 