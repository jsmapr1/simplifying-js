import expect from 'expect';

import { Coupon, FlashCoupon } from './prototypes';

describe('prototypes', () => {
  it('should have methods on a prototype', () => {
    const coupon = new Coupon(5, 'two months');
    const message = 'This offer expires in two months.';
    expect(coupon.price).toEqual(5);
    expect(coupon.getExpirationMessage()).toEqual(message);
  });

  it('should extend a prototype', () => {
    const flash = new FlashCoupon(5);
    const message = 'This is a flash offer and expires in two hours.';
    expect(flash.price).toEqual(5);
    expect(flash.getExpirationMessage()).toEqual(message);
  });
});
