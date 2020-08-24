$(document).ready(function () {
  $('.nav-opener').on('click', function (e) {
    e.preventDefault()
	$('body').toggleClass('nav-active');
	let $scrollableElement = document.querySelector('.nav-list');
	if ($('body').hasClass('nav-active')) {
		scrollLock.disablePageScroll($scrollableElement)
	} else {
		scrollLock.enablePageScroll()
	}
  })

	if ($(window).width() < 1201) {
		$('.nav-list > li > a').on('click touchstart', function (e) {
			e.preventDefault();
			e.stopPropagation();
			$('.has-sub-menu').toggleClass('open-sub-menu');
			return !1
		})
	}
})
