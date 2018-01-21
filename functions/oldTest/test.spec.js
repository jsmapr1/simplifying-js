import expect from 'expect';

import { applyPrice, formatPrice } from './test';

describe('apply price', () => {
  it('can be tested with a spy', () => {
    const domMock = {
      message: '',
      get() { return 'Aaron'; },
      set(id, message) {
        this.message = message;
      },
    };
    applyPrice({ price: 30 }, () => 0.1, domMock);
    expect(domMock.message).toEqual('Aaron your total is: 30 plus $3 in taxes.');
  });
});

describe('format price', () => {
  it('should return plus tax if no tax info', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const message = formatPrice(item, 'Aaron Cometbus', () => null);
    expect(message).toEqual('Aaron Cometbus your total is: 30 plus tax.');
  });

  it('should return plus tax information', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const message = formatPrice(item, 'Aaron Cometbus', () => 0.1);
    expect(message).toEqual('Aaron Cometbus your total is: 30 plus $3 in taxes.');
  });
});
