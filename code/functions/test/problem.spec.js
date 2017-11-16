import expect from 'expect';

import sinon from 'sinon';
import * as taxService from './taxService';
import { formatPrice } from './problem';

describe('format price', () => {
  let taxStub;

  beforeEach(() => {
    taxStub = sinon.stub(taxService, 'getTaxInformation'); // <label id="test.stub" />
  });

  afterEach(() => {
    taxStub.restore(); // <label id="test.restore" />
  });

  it('should return plus tax if no tax info', () => {
    taxStub.returns(null); // <label id="test.stub2" />
    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item);
    const expectedMessage = 'Aaron Cometbus your total is: 30 plus tax.';
    expect(message).toEqual(expectedMessage);
  });

  it('should return plus tax information', () => {
    taxStub.returns(0.1);

    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item);
    const expectedMessage = 'Aaron Cometbus your total is: 30 plus $3 in taxes.';
    expect(message).toEqual(expectedMessage);
  });
});
