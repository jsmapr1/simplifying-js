import expect from 'expect';
import {
  displayShipping,
} from './includes';

import {
  displayShipping as displayShippingIndex,
} from './greater';

describe('includes actions', () => {
  it('should display shipping using index', () => {
    const sections = ['shipping', 'address'];
    expect(displayShippingIndex(sections)).toEqual(true);
  });

  it('should not display shipping using index', () => {
    const sections = ['contact', 'address'];
    expect(displayShippingIndex(sections)).toEqual(false);
  });

  it('should display shipping', () => {
    const sections = ['shipping', 'address'];
    expect(displayShipping(sections)).toEqual(true);
  });

  it('should not display shipping', () => {
    const sections = ['contact', 'address'];
    expect(displayShipping(sections)).toEqual(false);
  });
});
