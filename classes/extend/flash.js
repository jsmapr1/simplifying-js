import Coupon from './extend';

class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || 'two hours';
  }

  getExpirationMessage() {
    return `This is a flash offer and expires in ${this.expiration}.`;
  }

  isRewardsEligible(user) {
    return super.isRewardsEligible(user) && this.price > 20;
  }

  getRewards(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.8;
    }
  }
}

export { FlashCoupon };
