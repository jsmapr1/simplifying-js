import expect from 'expect';

import Coupon from './get';
import CouponProblem from './problem';
import CouponGetters from './price';
import CouponSet from './set';

describe('get problem', () => {
  it('should set price as a string', () => {
    const coupon = new CouponProblem(5);
    coupon.price = '$10';
    expect(coupon.getPriceText()).toEqual('$ $10');
  });
});

describe('Getters', () => {
  const coupon = new CouponGetters(10);
  it('should get price text', () => {
    expect(coupon.priceText).toEqual('$ 10');
  });

  it('should get expiration text', () => {
    const message = 'This offer expires in two weeks.';
    expect(coupon.expirationMessage).toEqual(message);
  });
});

describe('Setters', () => {
  const coupon = new CouponSet(10);
  it('should get price', () => {
    expect(coupon.price).toEqual(10);
  });

  it('should set halfPrice', () => {
    coupon.halfPrice = 40;
    expect(coupon.price).toEqual(20);
  });
});

describe('getters and setters', () => {
  it('should get a inner variable', () => {
    const coupon = new Coupon(10);
    expect(coupon.price).toEqual(coupon._price);
  });

  it('should set inner property', () => {
    const coupon = new Coupon(10);
    expect(coupon.price).toEqual(10);
    coupon.price = 100;
    expect(coupon.price).toEqual(100);
  });

  it('should parse int when setting', () => {
    const coupon = new Coupon(10);
    expect(coupon.price).toEqual(10);
    coupon.price = '$100';
    expect(coupon.price).toEqual(100);
  });

  it('should get a message', () => {
    const coupon = new Coupon(10);
    expect(coupon.priceText).toEqual('$10');
  });
});
