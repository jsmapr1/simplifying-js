// START:set
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'Two Weeks';
  }

  set halfPrice(price) {
    this.price = price / 2;
  }
}
// END:set

// START:use
const coupon = new Coupon(5);
coupon.price;
// 5
coupon.halfPrice = 20;
coupon.price;
// 10
coupon.halfPrice;
// undefined
// END:use

export default Coupon;
