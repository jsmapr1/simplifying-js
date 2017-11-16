// START:getter
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'two weeks';
  }

  get priceText() {
    return `$ ${this.price}`;
  }

  get expirationMessage() {
    return `This offer expires in ${this.expiration}.`;
  }
}
// END:getter

// START:use
const coupon = new Coupon(5);
coupon.price = 10;
coupon.priceText;
// '$10'
coupon.messageText;
// 'This offer expires in two weeks.
coupon.messageText;
// END:use

export default Coupon;
