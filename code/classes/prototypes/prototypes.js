/* eslint-disable func-names */
// START:instance
function Coupon(price, expiration) {
  this.price = price;
  this.expiration = expiration || 'two weeks';
}
const coupon = new Coupon(5, 'two months');
coupon.price;
// 5
// END:instance

// START:prototype
Coupon.prototype.getExpirationMessage = function () {
  return `This offer expires in ${this.expiration}.`;
};
coupon.getExpirationMessage();
// This offer expires in two months.

// END:prototype

// START:extend
class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || 'two hours';
  }

  getExpirationMessage() {
    return `This is a flash offer and expires in ${this.expiration}.`;
  }
}
// END:extend

export { Coupon, FlashCoupon };
