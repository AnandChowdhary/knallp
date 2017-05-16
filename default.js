document.addEventListener("DOMContentLoaded", function() {
	[].slice.call(document.querySelectorAll(".btn")).forEach(function(a) {
		a.setAttribute("role", "button");
	});
});

$(window).scroll(function() {
	if ($(document).scrollTop() > 0) {
		$("body").addClass("nav-fixed");
	} else {
		$("body").removeClass("nav-fixed");
	}
});

$(".sub-nav").parent().click(function() {
	$(this).find(".sub-nav").fadeToggle();
});

$(function() {
	setTimeout(function() {
		$("[data-featherlight]").click();
	}, 100);
});

$(".agree-btn").click(function() {
	var current = $.featherlight.current();
	current.close();
});