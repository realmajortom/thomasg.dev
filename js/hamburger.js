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