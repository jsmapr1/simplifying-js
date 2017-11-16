import expect from 'expect';

import {
  getDogNames as getNamesFull,
} from './problem';

import {
  applyFilters,
  anyFilters,
  dogs,
  getDogNames,
  colorCheck,
  stateCheck,
  weightCheck,
} from './curry';

describe('curry', () => {
  it('should apply a function without currying', () => {
    expect(getNamesFull(dogs, ['color', 'black'])).toEqual(['max', 'don']);
  });
  it('should get dog names with regular function', () => {
    expect(getDogNames(dogs, dog => dog.color === 'black')).toEqual(['max', 'don']);
  });
  it('should get dog names with curried function', () => {
    expect(getDogNames(dogs, weightCheck(20))).toEqual(['max']);
  });
  it('should get dog names with curried function', () => {
    expect(getDogNames(dogs, weightCheck(20))).toEqual(['max']);
  });
  it('should apply multiple functions', () => {
    expect(applyFilters(dogs, colorCheck('black'), stateCheck('kansas'))).toEqual(['don']);
  });
  it('should apply multiple functions', () => {
    expect(applyFilters(dogs, colorCheck('black'), stateCheck('kansas'))).toEqual(['don']);
  });
  it('should apply multiple functions', () => {
    expect(anyFilters(dogs, weightCheck(20), colorCheck('chocolate'))).toEqual(['max', 'shadow']);
  });
});
