$(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
			$('.go-top').fadeIn();
		} else {
			$('.go-top').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.go-top').click(function(){
		$('html, body').animate({scrollTop : 0}, 600);
		return false;
	});






	
});