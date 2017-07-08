var page = {};
page.sectionNumber = 4;

$(function() {

    //Check to see if the window is top if not then display button
	$(window).scroll(function() {
	    goTopFadeEffect(50);
        navTabFadeEffect(50);
        indicatorScrollSpy();
	});

    // click event to scroll to top
	$('.go-top').click(function() {
		$('html, body').animate({scrollTop : 0}, 600);
		return false;
	});
});


function goTopFadeEffect(number) {
    if ($(this).scrollTop() > 50) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
}
function navTabFadeEffect(number) {
    if ($(this).scrollTop() > 40) {
        $('.nav-tab').fadeIn();
    } /*else {
     $('.nav-tab').fadeOut();
     }*/
}
function indicatorScrollSpy() {
    var order = 0;
    var currentTop = $(document).scrollTop();
    if ($('#test2').offset().top > currentTop) {
        order = 0;
    } else if ($('#test3').offset().top > currentTop) {
        order = 1;
    } else if ($('#test4').offset().top > currentTop) {
        order = 2;
    } else {
        order = 3;
    }
    page.moveIndicator(order);
}


page.move = function(tag) {
    window.location.href = tag;
}

page.moveIndicator = function (order) {
    var category = ["WELCOME", "GREETING", "GALLERY", "DIRECTIONS"];
    console.log("current tab : " + category[order]);
    var browserWidth = $(window).width();
    var onePieceWidth = browserWidth / page.sectionNumber;
    var scrollSpyLeft = page.getScrollSpyLeftValue(onePieceWidth, order);
    var scrollSpyRight = page.getScrollSpyRightValue(browserWidth, onePieceWidth, scrollSpyLeft);
    page.modifyIndicatorCss(scrollSpyLeft, scrollSpyRight);
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
