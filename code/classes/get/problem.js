// START:problem
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'Two Weeks';
  }

  getPriceText() {
    return `$ ${this.price}`;
  }

  getExpirationMessage() {
    return `This offer expires in ${this.expiration}`;
  }
}

const coupon = new Coupon(5);
coupon.price = '$10';
coupon.getPriceText();
// '$ $10'
// END:problem

export default Coupon;
