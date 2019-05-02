const hamburger = document.querySelector('.hamburger');
const mobileLink = document.getElementsByClassName('mobile-link');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  for (let l = 0; l < mobileLink.length; l++) {
    mobileLink[l].classList.toggle('display-none');
  }
});