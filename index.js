$(document).ready(function () {

  const shrinkThings = [
    ['#headerCont', 'headerCont-shrink'],
    ['#headerMain', 'headerMain-shrink'],
    ['#headerTitle', 'headerTitle-shrink'],
    ['#body', 'scroll-on'],
    ['#continueBtn', 'noShow'],
    ['#headerSub', 'noShow'],
  ];

  const show = [
    '#nbDesk', '#mail-icon', '#github-icon', '#about-link', '#projects-link', '#contact-link', '.hamburger'
  ];

  window.onscroll = function () {
    if (window.pageYOffset >= 1) {
      for (let p = 0; p < shrinkThings.length; p++) {
        $(shrinkThings[p][0]).addClass(shrinkThings[p][1]);
      }
      for (let q = 0; q < show.length; q++) {
        $(show[q]).removeClass('noShow');
      }
    }
  };

  $('#headerTitle').click(function () {
    window.scrollTo(0, 0);
    for (let r = 0; r < shrinkThings.length; r++) {
      $(shrinkThings[r][0]).removeClass(shrinkThings[r][1]);
    }
    for (let s = 0; s < show.length; s++) {
      $(show[s]).addClass('noShow');
    }
  });

  $('#hamMenu').click(function () {
    $('#hamMenu').toggleClass('is-active');
    $('.nbMobile').toggleClass('noShow');
    $('#main').toggleClass('blur');
  });
  /*
    let liveStory = 0;
    const cards = ['#us1', '#us2', '#us3', '#us4', '#us5', '#us6'];
    $('#prevUS').click(function () {
      if (liveStory > 0) {
        $(cards[liveStory]).addClass('noShow');
        $(cards[liveStory - 1]).removeClass('noShow');
        liveStory -= 1;
      }
    });
    $('#nextUS').click(function () {
      if (liveStory < 5) {
        $(cards[liveStory]).addClass('noShow');
        $(cards[liveStory + 1]).removeClass('noShow');
        liveStory += 1;
      }
    });
  */
  $('.userStories').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

