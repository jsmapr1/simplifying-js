import expect from 'expect';
import CouponProblem from './problem';
import CouponSimple from './constructor';
import Coupon from './methods';

describe('basic class', () => {
  it('should make a class', () => {
    const coupon = new CouponProblem();
    expect(coupon instanceof CouponProblem).toEqual(true);
  });

  it('should set properties', () => {
    const coupon = new CouponSimple(5);
    expect(coupon.price).toEqual(5);
    expect(coupon.expiration).toEqual('two weeks');
  });

  it('should have methods', () => {
    const coupon = new Coupon(5);
    const message = 'This offer expires in two weeks.';

    expect(coupon.getPriceText()).toEqual('$ 5');
    expect(coupon.getExpirationMessage()).toEqual(message);
  });
});
