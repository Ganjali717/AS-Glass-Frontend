var mybutton = document.getElementById("backtop");
var nav = document.getElementById("menu");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
    nav.style.position = "fixed";
    nav.style.top = 0;
  } else {
    mybutton.style.display = "none";
    nav.style.position = "relative";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



