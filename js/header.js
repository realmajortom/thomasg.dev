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

