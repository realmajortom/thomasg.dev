function adjustHeader() {
  let header = document.getElementById('header');
  let image = document.getElementById('header-img');
  let mainTitle = document.getElementById('title');
  let subTitle = document.getElementById('subtitle');

  if (window.pageYOffset > 10) {
    header.classList.add('header-small');
    image.classList.add('image-small');
    mainTitle.classList.add('title-small');
    subTitle.classList.add('subtitle-small');
  } else {
    header.classList.remove('header-small');
    image.classList.remove('image-small');
    mainTitle.classList.remove('title-small');
    subTitle.classList.remove('subtitle-small');
  }
}

window.onscroll = function () { adjustHeader(); };