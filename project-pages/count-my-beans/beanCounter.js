/* eslint-disable no-alert, no-console */

function beanCounter(brewUnit, desiredQuantity, brewStrength, brewMethod) {
  const ratios = {
    perc: {
      strong: 75,
      medium: 60,
      mild: 45,
    },
    immer: {
      strong: 93,
      medium: 75,
      mild: 60,
    },
  };

  let quant = eval(desiredQuantity.split('').filter(item => /[0-9.]/.test(item)).join(''));

  if (brewUnit === 'ounce') {
    quant = quant / 33.814;
  } else {
    quant = quant * .001;
  }

  const grams = Math.round((ratios[brewMethod][brewStrength] * quant * 10) / 10);
  const message = `Use ${grams} grams of coffee for the perfect brew!`;
  $('#results').html(message);
}

$(document).ready(function () {
  $("input[type='button']").click(function () {
    var meth = $("input[type=radio][name=brew-method]:checked").val();
    var stren = $("input[type=radio][name=strength]:checked").val();
    var un = $("input[type=radio][name=unit]:checked").val();
    var quantOut = $("#quantPut").val();

    beanCounter(un, quantOut, stren, meth);
  });
});
