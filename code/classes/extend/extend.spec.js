import expect from 'expect';
import Coupon from './extend';
import { FlashCoupon } from './flash';

describe('coupon', () => {
  it('should have rewards for users', () => {
    const coupon = new Coupon(10);
    const user = {
      rewardsEligible: true,
      active: true,
    };
    expect(coupon.price).toEqual(10);
    coupon.getRewards(user);
    expect(coupon.price).toEqual(9);
  });

  it('should not reward ineligible users', () => {
    const coupon = new Coupon(10);
    const user = {
      rewardsEligible: true,
      active: false,
    };
    expect(coupon.price).toEqual(10);
    coupon.getRewards(user);
    expect(coupon.price).toEqual(10);
  });
});

describe('flash coupon', () => {
  it('should call parent constructor', () => {
    const flash = new FlashCoupon(5);
    expect(flash.price).toEqual(5);
  });

  it('should inherit methods', () => {
    const flash = new FlashCoupon(5);
    expect(flash.getPriceText()).toEqual('$ 5');
  });

  it('should override parent methods', () => {
    const flash = new FlashCoupon(5);
    const message = 'This is a flash offer and expires in two hours.';
    expect(flash.getExpirationMessage()).toEqual(message);
  });

  it('should call parent methods for user authentication', () => {
    const flash = new FlashCoupon(100);
    const user = {
      rewardsEligible: true,
      active: true,
    };
    flash.getRewards(user);
    expect(flash.price).toEqual(80);
  });

  it('should not give rewards to inactive user', () => {
    const flash = new FlashCoupon(100);
    const user = {
      rewardsEligible: true,
      active: false,
    };
    flash.getRewards(user);
    expect(flash.price).toEqual(100);
  });

  it('should not give rewards to user when price is too low', () => {
    const flash = new FlashCoupon(10);
    const user = {
      rewardsEligible: true,
      active: true,
    };
    flash.getRewards(user);
    expect(flash.price).toEqual(10);
  });
});
