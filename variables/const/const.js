/* eslint-disable no-var, prefer-const */
export function getTotal() {
//  # START:totalConst
  const taxRate = 0.1;

  const total = 100 + (100 * taxRate);

  // Skip 100 lines of code

  return `Your Order is ${total}`;
//  # END:totalConst
}

export function getTotalVar() {
//  # START:totalVar
  var taxRate = 0.1;

  var total = 100 + (100 * taxRate);

  // Skip 100 lines of code

  return `Your Order is ${total}`;
//  # END:totalVar
}

export function getTotalLet() {
//  # START:totalLet
  const taxRate = 0.1;
  const shipping = 5.00;

  let total = 100 + (100 * taxRate) + shipping;

  // Skip 100 lines of code

  return `Your Order is ${total}`;
//  # END:totalLet
}

export function mutableDiscount(cart) {
//  # START:mutate
  const discountable = [];

  // Skip some lines

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].discountAvailable) {
      discountable.push(cart[i]);
    }
  }
  //  # END:mutate
  return discountable;
}

export function discountable(cart) {
//  # START:filter
  const discountable = cart.filter(item => item.discountAvailable);
  //  # END:filter
  return discountable;
}

