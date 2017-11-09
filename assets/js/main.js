/*fading in and out */

var btn1 = document.getElementById("freedom_button");
var btn2 = document.getElementById("costs_button");
var btn3 = document.getElementById("community_button");
var freedom = document.getElementById("freedom");
var cost = document.getElementById("cost");
var community = document.getElementById("community");

btn1.addEventListener("click", fin);
btn2.addEventListener("click", foo);
btn3.addEventListener("click", fum);

function fin() {

   fadeIn(freedom);
 }

 function foo() {

    fadeInCost(cost);
  }

  function fum() {
  

     fadeInCommunity(community);
   }

function fadeIn(freedom) {

    var tick = function() {
      freedom.style.opacity = +freedom.style.opacity + 0.03;

      if (+freedom.style.opacity < 1) {
        setTimeout(tick, 16)
      }
    };
    tick();
  }

  function fadeInCost(cost) {

      var tick = function() {
        cost.style.opacity = +cost.style.opacity + 0.03;

        if (+cost.style.opacity < 1) {
          setTimeout(tick, 16)
        }
      };
      tick();
    }

    function fadeInCommunity(community) {

        var tick = function() {
          community.style.opacity = +community.style.opacity + 0.03;

          if (+community.style.opacity < 1) {
            setTimeout(tick, 16)
          }
        };
        tick();
      }


/*hamburger menu */

/* A simple and scalable hamburger menu using css transitions. */
  $(document).ready(function(){
var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
	}

	isActive = !isActive;
});

});




(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 800) {
                $('#menu').fadeIn(500);
            } else {
                $('#menu').fadeOut(500);
            }
        });
    });
})(jQuery);




  $(document).ready(function(){

    $('a[href^="#"]').on('click', function(event) {



        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }

      /*  var name = "Koha support for libraries";
      	var nArr = name.split("");
      	var nameContainer = $('.name');

      	for(var i = 0; i < nArr.length; i++) {
      		if(nArr[i] == " ") {
      			nameContainer.append('<span></span>')
      		} else {
      			nameContainer.append('<span style="transition-delay: ' + (Math.random() * 2).toFixed(2) + 's">' + nArr[i] + '</span>')
      		}

      	}*/

      	setTimeout(function() {
      		nameContainer.addClass('visible');
      	}, 500)

    });

});

$(document).ready(function(){
	console.log('ready!')
	// Custom jQuery Functions Here


})
