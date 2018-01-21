import Coupon from './extend';

class FlashCoupon extends Coupon {

}

const flash = new FlashCoupon(10);

flash.price;
// 10

flash.getPriceText();
// "$ 10"
