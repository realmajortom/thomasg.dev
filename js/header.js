const navLink = document.getElementsByClassName('nav-link-fs');
const classPairs = [
  ['header-container', 'header-pinned'],
  ['header-text', 'header-text-pinned'],
  ['navbar', 'navbar-pinned'],
  ['my-name', 'my-name-pinned'],
  ['my-title', 'my-title-pinned'],
  ['scroll-link', 'icon-fs'],
  ['icon-container', 'icon-pinned'],
  ['body', 'scroll-on'],
  ['ham-menu', 'show'],
];

var didScroll = false;
window.onscroll = function () {
  makeHeader();
};
function makeHeader() {
  // function getClassLast(addRem) {
  //   document.getElementById(classPairs[p][0]).classList.addRem.(classPairs[p][1]);
  // }
  if (window.pageYOffset >= 1) {
    for (let p = 0; p < classPairs.length; p++) {
      document.getElementById(classPairs[p][0]).classList.add(classPairs[p][1]);
    }
    for (let n = 0; n < navLink.length; n++) {
      navLink[n].classList.add('nav-link-pinned');
    }
  }
  else {
    for (let p = 0; p < classPairs.length; p++) {
      document.getElementById(classPairs[p][0]).classList.remove(classPairs[p][1]);
    }
    for (let n = 0; n < navLink.length; n++) {
      navLink[n].classList.remove('nav-link-pinned');
    }
  }
}
setInterval(function () {
  if (didScroll) {
    didScroll = false;
  }
}, 100);

