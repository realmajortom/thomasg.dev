
const navLink = document.getElementsByClassName('barlink');
const classPairs = [
  ['header-container', 'header-pin'],
  ['header-text', 'header-text-pin'],
  ['name-text', 'name-text-pin'],
  ['job-text', 'display-none'],
  ['scroll-link', 'display-none'],
  ['icon-container', 'icon-cont-pin'],
  ['navbar-desktop', 'navbar-pin'],
  ['ham-menu', 'show-ham'],
  ['body', 'scroll-on']
];

var didScroll = false;
window.onscroll = function () {
  adjustHeader();
};
function adjustHeader() {
  if (window.pageYOffset >= 1) {
    for (let p = 0; p < classPairs.length; p++) {
      document.getElementById(classPairs[p][0]).classList.add(classPairs[p][1]);
    }
    for (let n = 0; n < navLink.length; n++) {
      navLink[n].classList.add('barlink-pin');
    }
  }
  else {
    for (let p = 0; p < classPairs.length; p++) {
      document.getElementById(classPairs[p][0]).classList.remove(classPairs[p][1]);
    }
    for (let n = 0; n < navLink.length; n++) {
      navLink[n].classList.remove('barlink-pin');
    }
  }
}
setInterval(function () {
  if (didScroll) {
    didScroll = false;
  }
}, 100);


const hamburger = document.querySelector('.hamburger');
const mobileLink = document.getElementsByClassName('mobile-link');
const mobileNav = document.getElementById('navbar-mobile');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  mobileNav.classList.toggle('height');
  for (let l = 0; l < mobileLink.length; l++) {
    mobileLink[l].classList.toggle('display-none');
  }
});
