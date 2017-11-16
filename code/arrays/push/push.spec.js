import expect from 'expect';
import {
  cart,
  reward,
  summarizeCart,
  summarizeCartUpdated,
} from './push';

describe('push', () => {
  it('should not return an error intitially', () => {
    const testCart = [...cart];
    const updated = [...cart, reward];
    expect(summarizeCart(testCart)).toEqual({
      discounts: 1,
      items: 4,
      cart: updated,
    });
  });

  it('should return an error when rearranged', () => {
    const testCart = [...cart];
    expect(summarizeCartUpdated(testCart)).toEqual({
      error: 'Can only have one discount',
    });
  });

  it('should not return an error with spread', () => {
    const testCart = [...cart];
    const updated = [...cart, reward];
    expect(summarizeCart(testCart)).toEqual({
      discounts: 1,
      items: 4,
      cart: updated,
    });
  });
});
