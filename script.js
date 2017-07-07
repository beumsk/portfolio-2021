// show menu on burgerclick
$("#burger").on("click", function() {
  $("#menu").removeClass("hidden");
  $("#burger").addClass("hidden");
  $("#cross").removeClass("hidden");
});

// hide menu on crossclick
$("#cross").on("click", function() {
  $("#menu").addClass("hidden");
  $("#cross").addClass("hidden");
  $("#burger").removeClass("hidden");
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


// Manage projects hover

$("figure").on("mouseover", function() {
	if ($(window).width() >= 1024) {
		$(this).find("figcaption").slideDown();
	}
});
$("figure").on("mouseleave", function() {
	if ($(window).width() >= 1024) {
		$(this).find("figcaption").slideUp();
	}
});



// Manage #more (more transforms into codepen when all loaded)
$(".load1, .load2, .load3, .load4").hide();
var load = 0;
$("#more > span").on("click", function () {
	load++;
	switch (load) {
		case 1:
			$(".load1").fadeIn(1000, "linear");
			break;
		case 2:
			$(".load2").fadeIn(1000, "linear");
			$("#more").html("<a href='http://codepen.io/beumsk/pens/public/' target='_blank'><span>More creations on Codepen.io</span></a>");
			$("#more a").css("text-decoration", "none");
			break;
		
			
	}
});


// Send email
var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_cIcSxyuR";

  $("#button").attr("value", "Sending...");
  emailjs.sendForm(service_id,template_id,"myform")
  	.then(function(){ 
    	alert("Thank you for your message !");
       $("#button").attr("value", "Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       $("#button").attr("value", "Send");
    });
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



