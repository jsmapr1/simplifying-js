// START: method
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'two weeks';
  }

  getPriceText() {
    return `$ ${this.price}`;
  }

  getExpirationMessage() {
    return `This offer expires in ${this.expiration}.`;
  }
}

const coupon = new Coupon(5);
coupon.getPriceText();
// '$ 5'
coupon.getExpirationMessage();
// 'This offer expires in two weeks.'

// END: method

export default Coupon;
