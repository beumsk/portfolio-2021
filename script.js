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



