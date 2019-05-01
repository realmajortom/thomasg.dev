var didScroll = false;

window.onscroll = function () { makeHeader(); };
function makeHeader() {
  var headerCont = document.getElementById('header-container');
  var headerText = document.getElementById('header-text');
  var navBar = document.getElementById('navbar');
  var myName = document.getElementById('my-name');
  var myTitle = document.getElementById('my-title');
  var navLink = document.getElementsByClassName('nav-link-large');
  if (window.pageYOffset > 1) {
    headerCont.classList.add('header-small');
    headerText.classList.add('header-text-small');
    navBar.classList.add('nav-small');
    myName.classList.add('my-name-small');
    myTitle.classList.add('my-title-small');
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.add('nav-link-small');
    }
  } else {
    headerCont.classList.remove('header-small');
    headerText.classList.remove('header-text-small');
    navBar.classList.remove('nav-small');
    myName.classList.remove('my-name-small');
    myTitle.classList.remove('my-title-small');
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove('nav-link-small');
    }
  }
}

setInterval(function () {
  if (didScroll) {
    didScroll = false;
  }
}, 100);