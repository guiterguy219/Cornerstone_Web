const banner = $(".image-banner");
const contact = $(".contact");
const faqA = $(".faq-a");
const menu = $("#menu");
var faqPos_Y;
var contactzPos_Y;
faqA.hide();

$(document).ready(function(){
  faqPos_Y = document.getElementById("faqs").offsetTop;
  contactzPos_Y = document.getElementById("contactz").offsetTop;
  document.getElementById("menu-home").style.borderBottom = "rgb(82,172,230) solid 5px";

  if (window.innerWidth <= 700) {
    faqPos_Y = faqPos_Y - 40;
    contactzPos_Y = contactzPos_Y - 40;
  }
});


function select_menu() {
  if (window.pageYOffset < (faqPos_Y - 70)) {
    document.getElementById("menu-home").style.borderBottom = "rgb(82,172,230) solid 5px";
    document.getElementById("menu-faqs").style.borderBottom = "rgb(50,50,50) solid 5px";
    document.getElementById("menu-contact").style.borderBottom = "rgb(50,50,50) solid 5px";
  } else if (window.pageYOffset >= (faqPos_Y - 70) && window.pageYOffset < (contactzPos_Y - 35)) {
    document.getElementById("menu-faqs").style.borderBottom = "rgb(82,172,230) solid 5px";
    document.getElementById("menu-home").style.borderBottom = "rgb(50,50,50) solid 5px";
    document.getElementById("menu-contact").style.borderBottom = "rgb(50,50,50) solid 5px";
  } else if (window.pageYOffset >= (contactzPos_Y - 35)) {
    document.getElementById("menu-contact").style.borderBottom = "rgb(82,172,230) solid 5px";
    document.getElementById("menu-home").style.borderBottom = "rgb(50,50,50) solid 5px";
    document.getElementById("menu-faqs").style.borderBottom = "rgb(50,50,50) solid 5px";
  }
}

function toggle_menu() {
  menu.slideToggle(400);
}

function menu_open() {
  menu.show();
}

function reveal_faqA(faqNum) {
  faqA.slideUp();
  if (document.getElementById("faq-" + faqNum + "-a").style.display == "none") {
    $("#faq-" + faqNum + "-a").slideToggle();
  }
}
function set_elPos() {
  faqPos_Y = document.getElementById("faqs").offsetTop;
  contactzPos_Y = document.getElementById("contactz").offsetTop;
  if (window.innerWidth <= 700) {
    faqPos_Y = faqPos_Y - 40;
    contactzPos_Y = contactzPos_Y - 40;
  }
}

function scrollTo_home() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollTo_faqs() {
  document.body.scrollTop = faqPos_Y-70;
  document.documentElement.scrollTop = faqPos_Y-70;
}

function scrollTo_contactz() {
  document.body.scrollTop = contactzPos_Y-35;
  document.documentElement.scrollTop = contactzPos_Y-35;
}
