function getPrices() {
// START:formattedPrices
  const prices = ['1.0', '2.15'];

  const formattedPrices = [];
  for (let i = 0; i < prices.length; i++) {
    formattedPrices.push(parseFloat(prices[i]));
  }
  // END: formattedPrices
  return formattedPrices;
}

function getPrices2() {
// START:pricesFloat
  const prices = ['1.0', 'negotiable', '2.15'];

  const formattedPrices = []; // <label id="code.collection"/>
  for (let i = 0; i < prices.length; i++) { // <label id="code.iterator"/>
    const price = parseFloat(prices[i]);
    if (price) { // <label id="code.mix"/>
      formattedPrices.push(price);
    }
  }
  // END:pricesFloat
  return formattedPrices;
}

export { getPrices, getPrices2 };
