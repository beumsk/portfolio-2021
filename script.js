// Manage navbar 
if ($(window).width() < 748) {
	// hide cross and menu
	$("#menu").hide();
	$("#cross").hide();
	$("#menu").removeClass("hidden");
	$("#cross").removeClass("hidden");

	// show hamburger menu
	$("#burger").on("click", function() {
		$("#menu").slideToggle(function() {
			$("#burger").hide();
			$("#cross").show();
		});

	});

	// hide burger menu on cross
	$("#cross").on("click", function() {
		$("#menu").slideToggle(function() {
			$("#cross").hide();
			$("#burger").show();
		});
	});
}


// Manage more (more transforms into codepen when all loaded)
$(".load1, .load2").hide();
var load = 0;
$("#more").on("click", function () {
	load++;
	switch (load) {
		case 1:
			$(".load1").show();
			break;
		case 2:
			$(".load2").show();
			$("#more").html("<a href='http://codepen.io/beumsk/pens/public/' target='_blank'><span>More creations on Codepen.io</span></a>");
			$("#more a").css("text-decoration", "none");
			break;
		default:
			
	}
});


// Manage scroll
$("a[href^='#']").on("click", function() {
	if ($(window).width() < 748) {
		$("#menu").hide();
		$("#cross").hide();
		$("#burger").show();
	}
	var theId = $(this).attr("href");
	$("html, body").animate({scrollTop:($(theId).offset().top)-50}, "slow");
	return false;
});








// highlight current section
// highlight on hover does not work after scroll !!!
/*$(document).on("scroll", function() {
	if ($(document).scrollTop() < $("#about").offset().top) {
		$(".intLinks").css("background", "#009688");
	}
	else if ($(document).scrollTop() < $("#skills").offset().top && $(document).scrollTop() >= $("#about").offset().top) {
		$(".intLinks").css("background", "#009688");
		$("[href='#about']").css("background", "#00796B");
	}
	else if ($(document).scrollTop() < $("#creations").offset().top && $(document).scrollTop() >= $("#skills").offset().top) {
		$(".intLinks").css("background", "#009688");
		$("[href='#skills']").css("background", "#00796B");
	}
	else if ($(document).scrollTop() < $("#contact").offset().top && $(document).scrollTop() >= $("#creations").offset().top) {
		$(".intLinks").css("background", "#009688");
		$("[href='#creations']").css("background", "#00796B");
	}
	else if ($(document).scrollTop() < $("footer").offset().top && $(document).scrollTop() >= $("#contact").offset().top) {
		$(".intLinks").css("background", "#009688");
		$("[href='#contact']").css("background", "#00796B");
	}
});*/



