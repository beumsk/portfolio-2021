

$("#burger").on("click", function() {
	$("#menu").slideToggle(function() {
		$("#burger").hide();
		$("#cross").show();
	});
	
});

$("#cross").on("click", function() {
	$("#menu").slideToggle(function() {
		$("#cross").hide();
		$("#burger").show();
	});
});