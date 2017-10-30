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

        var name = "Koha support for libraries";
      	var nArr = name.split("");
      	var nameContainer = $('.name');

      	for(var i = 0; i < nArr.length; i++) {
      		if(nArr[i] == " ") {
      			nameContainer.append('<span></span>')
      		} else {
      			nameContainer.append('<span style="transition-delay: ' + (Math.random() * 2).toFixed(2) + 's">' + nArr[i] + '</span>')
      		}

      	}

      	setTimeout(function() {
      		nameContainer.addClass('visible');
      	}, 500)

    });

});

$(document).ready(function(){
	console.log('ready!')
	// Custom jQuery Functions Here


})
