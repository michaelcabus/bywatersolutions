// Hide the element. Doing this here will prevent the elements from disappering if JS is disabled.
$('.fade-content > *').css({'opacity':'0', 'transform': 'translateY(' + 2 + 'em)'});

// Trigger fade in as window scrolls
$(window).on('scroll load', function(){
  $('.fade-content > *').each( function(i){
    var bottom_of_object = $(this).offset().top + $(this).outerHeight()/8;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object ){
      $(this).css({'opacity':'1', 'transform': 'translateY(' + 0 + 'em)'});
    } else {
      $(this).css({'opacity':'0', 'transform': 'translateY(' + 2 + 'em)'});
    }
  });
});

$(document).ready(function() {
$(".site-header").prepend('<nav class="top_nav"><ul><li><a href="http://model.bywatersolutions.com">Koha Demo</a></li><li><a href="http://ticket.bywatersolutions.com/">Submit a Ticket (Current Koha Customers)</a></li><li><a href="">Contact ByWater Solutions</a></li></ul><ul><li><form action="/search" method="get" class="flex-row align-items-center mrs mlm hide-small width-search-input cz-color-2236962"><button><i class="fa fa-search" aria-hidden="true"></i></button><input autocomplete="off" name="term" class="mbn cz-color-0 cz-color-16777215 cz-color-13421772" data-type="search-input" type="search"></li></ul></nav>')
});

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
