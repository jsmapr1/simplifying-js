/* eslint-disable no-unused-vars */
// START:coupon
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'Two Weeks';
  }

  get price() {
    return this.price;
  }

  set price(price) {
    this.price = `$ ${price}`;
  }
}

const coupon = new Coupon(5);
// RangeError: Maximum call stack size exceeded
// END:coupon
