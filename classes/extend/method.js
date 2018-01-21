import Coupon from './extend';

class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || 'two hours';
  }

  getExpirationMessage() {
    return `This is a flash offer and expires in ${this.expiration}.`;
  }
}

const flash = new FlashCoupon(10);

flash.price;
// 10

flash.getExpirationMessage();
// "This is a flash offer and expires in two hours"
