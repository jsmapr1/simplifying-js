/* eslint-disable dot-notation */

// START:class
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'two weeks';
  }
}

const coupon = new Coupon(5);
coupon.price;
// 5
coupon['expiration'];
// 'Two Weeks'
// END:class

export default Coupon;
