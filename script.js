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



// Manage on scroll animations through AOS script
AOS.init({
  // Global settings:
  disable: function() { var maxWidth = 768; return window.innerWidth < maxWidth; }, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 240, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});



// Manage .more creation button (button transforms into codepen link when all loaded)
var load1 = document.querySelectorAll(".load-1");
var load2 = document.querySelectorAll(".load-2");
var moreButton = document.querySelector(".more > button");
var moreLink = document.querySelector(".more > a");
var load = 0;

moreButton.addEventListener("click", function() {
  load++;
  if (load === 1) {
    for (var j=0; j<load1.length; j++) { load1[j].classList.remove("hidden"); }
  }
  else if (load === 2) {
    for (var k=0; k<load2.length; k++) { load2[k].classList.remove("hidden"); }
    moreButton.classList.add("hidden");
    moreLink.classList.remove("hidden");
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
