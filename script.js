// Manage navbar 
if ($(window).width() < 768) {
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
	// hide burger menu on section
	$("section").on("click", function() {
		$("#menu").slideToggle(function() {
			$("#cross").hide();
			$("#burger").show();
		});
	});
}


// Manage scroll
$("a[href^='#']").on("click", function() {
	var theId = $(this).attr("href");
	$("html, body").animate({scrollTop:$(theId).offset().top}, "slow");
	return false;
});


// highlight current section
$(document).on("scroll", function() {
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
});


// highlight on hover does not work after scroll !!!
$(".intLinks").hover(function() {
	(this).css("background", "#00796B");
});