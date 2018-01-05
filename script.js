var $burger = $("#burger");
var $cross = $("#cross");
var $menu = $("#menu");

// show menu on burgerclick
$burger.on("click", function() {
  $menu.removeClass("hidden");
  $burger.addClass("hidden");
  $cross.removeClass("hidden");
});

// hide menu on crossclick
$cross.on("click", function() {
  $menu.addClass("hidden");
  $cross.addClass("hidden");
  $burger.removeClass("hidden");
});


// Manage scroll
var $links = $(".intLinks, .extLinks, #titleHeader, .nextLinks a");
var $htmlBody = $("html, body");

$links.on("click", function() {
  if ($(window).width() < 748) {
    $menu.addClass("hidden");
    $cross.addClass("hidden");
    $burger.removeClass("hidden");
  }
  var $Id = $(this).attr("href");
  $htmlBody.animate({scrollTop:($($Id).offset().top)-50}, "slow");
  return false;
});


// Manage #more (more transforms into codepen when all loaded)
var $loads = $(".load1, .load2, .load3");
var $load1 = $(".load1"), $load2 = $(".load2"), $load3 = $(".load3");
var $moreSpan = $("#more > span"), $more = $("#more");

$loads.hide();
var load = 0;
$moreSpan.on("click", function () {
  load++;
  switch (load) {
    case 1:
      $load1.fadeIn(1000, "linear");
      break;
    case 2:
      $load2.fadeIn(1000, "linear");
      $more.html("<a href='http://codepen.io/beumsk/pens/public/' target='_blank' style='text-decoration: none;'><span>More creations on Codepen.io</span></a>");
      break;
  }
});


// Send email
var $myForm = $("form#myform");
var $button = $("#button");
$myForm.submit(function(event){
  event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_cIcSxyuR";

  $button.attr("value", "Sending...");
  emailjs.sendForm(service_id,template_id,"myform")
    .then(function(){ 
      alert("Thank you for your message !");
       $button.attr("value", "Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       $button.attr("value", "Send");
    });
  return false;
});

