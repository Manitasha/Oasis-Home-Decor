( function( $ ) {
$( document ).ready(function() {
    $('.cssmenu > ul > li > a').click(function() {
      $('.cssmenu li').removeClass('active');
      $(this).closest('li').addClass('active');
      var checkElement = $(this).next();
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        $(this).closest('li').removeClass('active');
        checkElement.slideUp('normal');
      }
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('.cssmenu ul ul:visible').slideUp('normal');
        checkElement.slideDown('normal');
      }
      if($(this).closest('li').find('ul').children().length == 0) {
        return true;
      } else {
        return false;
      }
    });

    $( "#spinner" ).spinner();
    $( "#tabs" ).tabs();
    $( "#dialog-link, #icons li" ).hover(
    	function() {
    		$( this ).addClass( "ui-state-hover" );
    	},
    	function() {
    		$( this ).removeClass( "ui-state-hover" );
    	}
    );
    $("#button").button();
    $(".button").button();

    // contact form animations
    $('.contact').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.fadeOut();
      }
    });

});
} )( jQuery );
