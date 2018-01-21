import expect from 'expect';

import { getTotal, mutableDiscount, discountable } from './const';

it('should get total', () => {
  expect(getTotal()).toEqual('Your Order is 110');
});

describe('discountable', () => {
  const cart = [
    {
      item: 'Book',
      discountAvailable: false,
    },
    {
      item: 'Magazine',
      discountAvailable: true,
    },
  ];

  it('should get discountable', () => {
    expect(mutableDiscount(cart).length).toEqual(1);
  });

  it('should get discountable', () => {
    expect(discountable(cart).length).toEqual(1);
  });
});
