/* eslint-disable no-eval */
function beanCounter(unit, desiredQuant, strength, brewMethod) {
  const ratios = {
    Percolation: {
      Strong: 75,
      Medium: 60,
      Light: 45,
    },
    Immersion: {
      Strong: 93,
      Medium: 75,
      Light: 60,
    },
  };

  let quant = eval(desiredQuant.split('').filter(item => /[0-9./]/.test(item)).join(''));

  if (unit == 'Ounce') {
    quant += desiredQuant * 0.0295735;
  }
  const grams = Math.round(ratios[brewMethod][strength] * quant * 10) / 10;
  return grams;
}

beanCounter('Liters', '1/3 liters', 'Medium', 'Immersion');
