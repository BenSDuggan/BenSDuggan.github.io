/* Fix menu bar to top of page. */
	(function() {
		$(window).scroll(function(){
			if ( $(this).scrollTop() >= 300 ){ 
				$(".menuMain-container-rel").addClass("menuMain-container-fix");
				$(".bodyContain").css('margin-top', '50px');
			} else { 
				$(".menuMain-container-fix").removeClass("menuMain-container-fix");
				$(".bodyContain").css('margin-top', '0px');
			}  
		});
	})();
	
/*
 * Popup stuff
 */

function popup_open(x) {
	$("#popup-menu"+x).fadeIn();
	$(".popup-menu-background").fadeIn();
}
function popup_close(x) {
	$("#popup-menu" + x).fadeOut();
	$(".popup-menu-background").fadeOut();	
}