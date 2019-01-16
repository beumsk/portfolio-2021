// manage small device menu
var burger = document.querySelector(".burger");
var cross = document.querySelector(".cross");
var menu = document.querySelector(".menu");

burger.addEventListener("click", openMenu);
cross.addEventListener("click", closeMenu);

function openMenu() {
  menu.classList.remove("hidden");
  burger.classList.add("hidden");
  cross.classList.remove("hidden");
};

function closeMenu() {
  menu.classList.add("hidden");
  burger.classList.remove("hidden");
  cross.classList.add("hidden");
};



// Manage scroll
var $links = $(".int-links, .ext-links, .title-header, .next-links>a");
var $htmlBody = $("html, body");

$links.on("click", function() {
  if ($(window).width() < 748) closeMenu();
  var $Id = $(this).attr("href");
  $htmlBody.animate({scrollTop:($($Id).offset().top)-50}, "slow");
  return false;
});

// Manage scroll !IE & Edge & Safari --> if to implement, add scroll class into html
// var scrollLinks = document.querySelectorAll(".scroll");
// for (var i=0; i<scrollLinks.length; i++) {
//   scrollLinks[i].addEventListener("click", myScroll);
// }

// function myScroll(elt) {
//   elt.preventDefault();
//   var ypos = document.querySelector(elt.target.getAttribute("href")).offsetTop - 50;
//   window.scrollTo({ top: ypos, behavior: "smooth" });
//   closeMenu();
// }



// Manage .more creation button (button transforms into codepen link when all loaded)
var $loads = $(".load-1, .load-2, .load-3");
var $load1 = $(".load-1"), $load2 = $(".load-2"), $load3 = $(".load-3");
var $moreSpan = $(".more > span"), $more = $(".more");

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
      $more.html("<a href='https://codepen.io/beumsk/pens/public/' target='_blank' style='text-decoration: none;'><span>More creations on Codepen</span></a>");
      break;
  }
});

// smoother way to make creation appear
// var load1 = document.querySelectorAll(".load-1");
// var load2 = document.querySelectorAll(".load-2");
// var moreButton = document.querySelector(".more > span");
// var load = 0;

// moreButton.addEventListener("click", function() {
//   load++;
//   if (load === 1) {
//     for (var j=0; j<load1.length; j++) { load1[j].classList.remove("hidden"); }
//   }
//   else if (load === 2) {
//     for (var k=0; k<load2.length; k++) { load2[k].classList.remove("hidden"); }
//     moreButton.parentNode.innerHTML = "<a href='https://codepen.io/beumsk/pens/public/' target='_blank' rel='noreferrer noopener' style='text-decoration: none;'><span>More creations on Codepen</span></a>";
//   }
// });



// Send email
var myForm = document.getElementById("myform");
var button = document.getElementById("button");

myForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_cIcSxyuR";

  button.setAttribute("value", "Sending...");
  emailjs.sendForm(service_id, template_id, this)
    .then(function(){ 
      alert("Thank you for your message !");
       button.setAttribute("value", "Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       button.setAttribute("value", "Send");
    });
  return false;
});
