
function getPrices() {
// START:formattedPrices
  const prices = ['1.0', '2.15'];
  const formattedPrices = prices.map(price => parseFloat(price));
  // [1.0, 2.15];
  // END: formattedPrices
  return formattedPrices;
}

function getPrices2() {
// START:pricesFloat
  const prices = ['1.0', 'negotiable', '2.15'];
  const formattedPrices = prices.map(price => parseFloat(price))
  // [1.0, NaN, 2.15]
    .filter(price => price);
  // [1.0, 2.15]
  // END:pricesFloat
  return formattedPrices;
}

export { getPrices, getPrices2 };
