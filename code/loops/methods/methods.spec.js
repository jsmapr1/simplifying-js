import expect from 'expect';
import { getPrices, getPrices2 } from './methods';
import { getPrices as gProblem, getPrices2 as gProblem2 } from './problem';

describe('problem methods', () => {
  it('should get formatted prices', () => {
    expect(gProblem()).toEqual([1.0, 2.15]);
  });

  it('should get formatted prices', () => {
    expect(gProblem2()).toEqual([1.0, 2.15]);
  });
});

describe('solution methods', () => {
  it('should get formatted prices', () => {
    expect(getPrices()).toEqual([1.0, 2.15]);
  });

  it('should get formatted prices', () => {
    expect(getPrices2()).toEqual([1.0, 2.15]);
  });
});
