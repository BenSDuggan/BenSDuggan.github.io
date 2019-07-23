function popup_open(x) {
	$("#popup-menu"+x).fadeIn();
	$("#popup-menu-background"+x).fadeIn();
}
function popup_close(x) {
	$("#popup-menu" + x).fadeOut();
	$("#popup-menu-background" + x).fadeOut();	
}