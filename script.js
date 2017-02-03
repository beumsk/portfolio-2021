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

	// hide burger menu
	$("#cross").on("click", function() {
		$("#menu").slideToggle(function() {
			$("#cross").hide();
			$("#burger").show();
		});
	});
	// hide burger menu
	$("#menu").on("click", function() {
		$("#menu").slideToggle(function() {
			$("#cross").hide();
			$("#burger").show();
		});
	});
}