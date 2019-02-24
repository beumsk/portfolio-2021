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



// Manage links to close small device menu; smooth scrolling is handled by zenscroll script
var scrollLinks = document.querySelectorAll(".title-header, .int-links, .ext-links");
for (var i=0; i<scrollLinks.length; i++) {
  scrollLinks[i].addEventListener("click", closeMenu);
}



// Manage scrollspy
var section = document.querySelectorAll("section");
var sections = {};

window.onscroll = function() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop - 50;
    });
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i in sections) {
      if (sections[i] <= scrollPosition) {
        if (document.querySelector('.active')) {
          document.querySelector('.active').classList.remove("active");
        }
        document.querySelector('a[href*=' + i + ']').classList.add("active");
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
    moreButton.parentNode.innerHTML = "<a href='https://codepen.io/beumsk/pens/public/' target='_blank' rel='noreferrer noopener' style='text-decoration: none;'>More creations on Codepen</a>";
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
