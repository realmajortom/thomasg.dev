const hamburger = document.querySelector('.hamburger');
const navMob = document.getElementById('navbar-mobile');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  navMob.classList.toggle('hide-navbar-mobile');
});