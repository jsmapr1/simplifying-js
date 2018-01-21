import expect from 'expect';

import { formatPrice } from './test';

describe('format price', () => {
  it('should return plus tax if no tax info', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item, () => null);
    expect(message).toEqual('Aaron Cometbus your total is: 30 plus tax.');
  });

  it('should return plus tax information', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item, () => 0.1);
    expect(message).toEqual('Aaron Cometbus your total is: 30 plus $3 in taxes.');
  });
});
