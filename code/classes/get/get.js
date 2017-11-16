// START:solution
class Coupon {
  constructor(price, expiration) {
    this._price = price;
    this.expiration = expiration || 'Two Weeks';
  }

  get priceText() {
    return `$${this._price}`;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    const newPrice = price
      .toString()
      .replace(/[^\d]/g, '');
    this._price = newPrice;
  }

  get expirationMessage() {
    return `This offer expires in ${this.expiration}`;
  }
}

const coupon = new Coupon(5);
coupon.price;
// 5

coupon.price = '$10';

coupon.price;
// 10

coupon.priceText;
// $ 10
// END:solution
export default Coupon;
