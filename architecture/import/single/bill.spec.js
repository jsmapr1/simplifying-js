import expect from 'expect';
import { giveTotal } from './bill';

describe('bill', () => {
  it('should give total', () => {
    expect(giveTotal('sara', 10.33333))
      .toEqual('Sara, your total is: 10.33');
  });
});
