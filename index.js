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


  $('.continueBtn').click(function () {
    for (let p = 0; p < shrinkThings.length; p++) {
      $(shrinkThings[p][0]).addClass(shrinkThings[p][1]);
    }
    for (let q = 0; q < show.length; q++) {
      $(show[q]).removeClass('noShow');
    }
  });

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

  let liveSat = 0;
  const satCards = ['#sat1', '#sat2', '#sat3', '#sat4', '#sat5', '#sat6'];
  $('#prevSat').click(function () {
    if (liveSat > 0) {
      $(satCards[liveSat]).addClass('noShowStory');
      $(satCards[liveSat - 1]).removeClass('noShowStory');
      liveSat -= 1;
    } else {
      $(satCards[liveSat]).addClass('noShowStory');
      $(satCards[5]).removeClass('noShowStory');
      liveSat = 5;
    }
  });
  $('#nextSat').click(function () {
    if (liveSat < 5) {
      $(satCards[liveSat]).addClass('noShowStory');
      $(satCards[liveSat + 1]).removeClass('noShowStory');
      liveSat += 1;
    } else {
      $(satCards[liveSat]).addClass('noShowStory');
      $(satCards[0]).removeClass('noShowStory');
      liveSat = 0;
    }
  });

  let liveTrue = 0;
  const trueCards = ['#true1', '#true2', '#true3', '#true4', '#true5', '#true6'];
  $('#prevTrue').click(function () {
    if (liveTrue > 0) {
      $(trueCards[liveTrue]).addClass('noShowStory');
      $(trueCards[liveTrue - 1]).removeClass('noShowStory');
      liveTrue -= 1;
    } else {
      $(trueCards[liveTrue]).addClass('noShowStory');
      $(trueCards[5]).removeClass('noShowStory');
      liveTrue = 5;
    }
  });
  $('#nextTrue').click(function () {
    if (liveTrue < 5) {
      $(trueCards[liveTrue]).addClass('noShowStory');
      $(trueCards[liveTrue + 1]).removeClass('noShowStory');
      liveTrue += 1;
    } else {
      $(trueCards[liveTrue]).addClass('noShowStory');
      $(trueCards[0]).removeClass('noShowStory');
      liveTrue = 0;
    }
  });
});

