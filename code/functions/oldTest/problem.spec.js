import expect from 'expect';

import sinon from 'sinon';
import * as routing from './routing';
import * as taxService from './taxService';
import { formatPrice } from './problem';

// START:tests
describe('format price', () => {
  const userElement = {
    innerHTML: 'Aaron Cometbus',
  };

  const totalElement = {
    innerHTML: '',
  };

  const document = { // <label id="test.document" />
    getElementById: id => {
      if (id === 'user') {
        return userElement;
      }
      if (id === 'total') {
        return totalElement;
      }
      return null;
    },
  };

  global.document = document;

  let taxStub;

  beforeEach(() => {
    taxStub = sinon.stub(taxService, 'getTaxInformation'); // <label id="test.stub" />
  });

  afterEach(() => {
    totalElement.innerHTML = ''; // <label id="test.reset" />
    taxStub.restore();
  });

  it('should redirect if no location', () => {
    sinon.spy(routing, 'redirect'); // <label id="test.spy" />
    formatPrice({}, undefined);
    expect(routing.redirect.called).toEqual(true);
  });

  it('should return plus tax if no tax info', () => {
    taxStub.returns(null); // <label id="test.stub2" />
    formatPrice({ price: 30, location: 'Oklahoma' });
    const message = 'Aaron Cometbus your total is: 30 plus tax.';
    expect(totalElement.innerHTML).toEqual(message);
  });

  it('should return plus tax information', () => {
    taxStub.returns(0.1);
    formatPrice({ price: 30, location: 'Oklahoma' });
    const message = 'Aaron Cometbus your total is: 30 plus $3 in taxes.';
    expect(totalElement.innerHTML).toEqual(message);
  });
// END:tests
});
