$(function() {

	if($(document).scrollTop() >= 60){
		$('#topbar').addClass('topbar-colorful');
	}

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 60) {
            $('#topbar').addClass('topbar-colorful');
        } else {
            $('#topbar').removeClass('topbar-colorful');
        }
    });

});