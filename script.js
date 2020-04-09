// Manage scrollspy
var section = document.querySelectorAll("section");
var sections = {};

window.onscroll = function() {
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop - 50;
    });
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i in sections) {
      if (sections[i] <= scrollPosition) {
        if (document.querySelector(".active")) {
          document.querySelector(".active").classList.remove("active");
        }
        if (window.matchMedia("(min-width: 768px)").matches) {
          document.querySelector("header a[href*=" + i + "]").classList.add("active");
        }
        else {
          document.querySelector(".bottom-nav a[href*=" + i + "]").classList.add("active");
        }
      }
    }
};



// Manage .more creation button (button transforms into codepen link when all loaded)
var load1 = document.querySelectorAll(".load-1");
var load2 = document.querySelectorAll(".load-2");
var moreButton = document.querySelector(".more > button");
var load = 0;

moreButton.addEventListener("click", function() {
  load++;
  if (load === 1) {
    for (var j=0; j<load1.length; j++) { load1[j].classList.remove("hidden"); }
  }
  else if (load === 2) {
    for (var k=0; k<load2.length; k++) { load2[k].classList.remove("hidden"); }
    moreButton.parentNode.innerHTML = "<a href='https://codepen.io/beumsk/pens/public/' target='_blank' rel='noreferrer noopener'>More creations on Codepen</a>";
  }
});



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
