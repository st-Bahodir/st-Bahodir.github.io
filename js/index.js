
$(document).ready(function(){

  var stickyElement = $(".sticky"),
      stickyClass = "sticky-pin",
      stickyPos = stickyElement.offset().top, //Distance from the top of the window.
      stickyHeight;

  //Create a negative margin to prevent content 'jumps':
  stickyElement.after('<div class="jumps-prevent"></div>');
  function jumpsPrevent() {
    stickyHeight = stickyElement.innerHeight();
    stickyElement.css({"margin-bottom":"-" + stickyHeight + "px"});
    stickyElement.next().css({"padding-top": + stickyHeight + "px"}); 
  };
  jumpsPrevent(); //Run.

  //Function trigger:
  $(window).resize(function(){
    jumpsPrevent();
  });

  //Sticker function:
  function stickerFn() {
    var winTop = $(this).scrollTop();
    //Check element position:
    winTop >= stickyPos ?
      stickyElement.addClass(stickyClass):
      stickyElement.removeClass(stickyClass) 
  };
  stickerFn(); //Run.


  $(window).scroll(function(){
    stickerFn();
  });

});







//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/************preloader********/


function holder() {
  $(() => {

    setInterval(() => {

      let p = $('.holder');

      p.css('opacity', 0);

      setInterval(
        () => p.remove(),
        parseInt(p.css('--duration')) * 1000
        );

    }, 1000);

  });
}

holder();