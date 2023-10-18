//  Back To Top
let scrollButton = document.getElementById("back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// Hamburger Menu
var toggleMenu = document.getElementById("menuswitch");

function showMenu() {
  toggleMenu.style.display = "block";
}

function hideMenu() {
  toggleMenu.style.display = "none";
}
