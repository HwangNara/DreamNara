var page = {};
page.sectionNumber = 4;

$(function() {
    //Check to see if the window is top if not then display button
	$(window).scroll(function() {
	    offsetFadeEffect(50, '.go-top');
	    offsetFadeEffect(50, '.nav-tab');
        indicatorScrollSpy();
	});

    // click event to scroll to top
	$('.go-top').click(function() {
		$('html, body').animate({scrollTop : 0}, 600);
		return false;
	});
});


function offsetFadeEffect(number, selector) {
    if ($(this).scrollTop() > number) {
        $(selector).fadeIn();
    } else {
        $(selector).fadeOut();
    }
}

function indicatorScrollSpy() {
    var order = 0;
    var currentTop = $(document).scrollTop();

    if (topOffset('#menu-greeting') > currentTop) {
        order = 0;
    } else if (topOffset('#menu-gallery') > currentTop) {
        order = 1;
    } else if (topOffset('#menu-location') > currentTop) {
        order = 2;
    } else {
        order = 3;
    }
    page.moveIndicator(order);

    function topOffset(selector) {
        return $(selector).offset().top;
    }
}

page.move = function(tag) {
    window.location.href = tag;
}

page.moveIndicator = function (order) {
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
