window.onscroll = function () { stickMyHeader(); };
var header = document.getElementById('stickyHeader');
var sticky = header.offsetTop;
function stickMyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
} 