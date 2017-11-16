
import Coupon from './extend';

class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || 'two hours';
  }
}

const flash = new FlashCoupon(10);

flash.price;
// 10

flash.getExpirationMessage();
// "This offer expires in two hours"
