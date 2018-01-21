/* eslint-disable func-names */
// START:class
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'Two Weeks';
  }

  getExpirationMessage() {
    return `This offer expires in ${this.expiration}.`;
  }
}

const saleCoupon = new Coupon(5, 'two months');
saleCoupon.getExpirationMessage();
// This offer expires in two months.

// END:class

class FlashCoupon extends Coupon {
  constructor(...args) {
    super(args);
    this.expiration = 'Two Hours';
  }

  getExpirationMessage() {
    return `This is a flash offer and expires in ${this.expiration}`;
  }
}

export { Coupon, FlashCoupon };
