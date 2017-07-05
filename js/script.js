var page = {};
page.sectionNumber = 4;


$(function() {
    //Check to see if the window is top if not then display button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('.go-top').fadeIn();
		} else {
			$('.go-top').fadeOut();
		}
	});

    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('.nav-tab').fadeIn();
        } /*else {
            $('.nav-tab').fadeOut();
        }*/
    });

	// click event to scroll to top
	$('.go-top').click(function() {
		$('html, body').animate({scrollTop : 0}, 600);
		return false;
	});

	// tab link move
    page.move = function(tag) {
        window.location.href = tag;
    }

    // indicator scrollspy
    $(window).scroll(function() {
        page.currentTop = $(document).scrollTop();
        if ($('#test2').offset().top > page.currentTop) {
            page.moveIndicator(0);
        } else if ($('#test3').offset().top > page.currentTop) {
            page.moveIndicator(1);
        } else if ($('#test4').offset().top > page.currentTop) {
            page.moveIndicator(2);
        } else {
            page.moveIndicator(3);
        }
    });
});

page.moveIndicator = function (number) {
    page.category = ["WELCOME", "GREETING", "GALLERY", "DIRECTIONS"];
    console.log(page.category[number]);

    page.browserWidth = $(window).width();
    page.onePieceWidth = page.browserWidth / page.sectionNumber;
    page.scrollSpyLeft = page.getScrollSpyLeftValue(page.onePieceWidth, number);
    page.scrollSpyRight = page.getScrollSpyRightValue(page.browserWidth, page.onePieceWidth, page.scrollSpyLeft);
    page.modifyIndicatorCss(page.scrollSpyLeft, page.scrollSpyRight);
};

page.getScrollSpyLeftValue = function (onePieceWidth, order) {
    return order * onePieceWidth;
};

page.getScrollSpyRightValue = function (browserWidth, onePieceWidth, leftValue) {
    return browserWidth - onePieceWidth - leftValue;
};

page.modifyIndicatorCss = function (scrollSpyLeft, scrollSpyRight) {
    $('.indicator').css({
        'left':  scrollSpyLeft + 'px',
        'right': scrollSpyRight + 'px'
    });
};
