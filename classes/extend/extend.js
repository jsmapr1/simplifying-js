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

  isRewardsEligible(user) {
    return user.rewardsEligible && user.active;
  }

  getRewards(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.9;
    }
  }
}

export default Coupon;
