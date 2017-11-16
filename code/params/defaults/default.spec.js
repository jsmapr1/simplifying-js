import expect from 'expect';
import {
  convertWeight as convertWeightSimple,
} from './simple';

import {
  convertWeight as convertWeightMore,
} from './more';

import {
  convertWeight as convertWeightProblem,
} from './problem';

import {
  convertWeight,
} from './default';

describe('convert weight', () => {
  it('should convert pounds to kilograms', () => {
    expect(convertWeightSimple(4)).toEqual(8.8);
    expect(convertWeightMore(4)).toEqual(8.8);
    expect(convertWeightProblem(4)).toEqual(8.8);
    expect(convertWeight(4)).toEqual(8.8);
  });

  it('should convert pounds and grams', () => {
    expect(convertWeightMore(4, 8)).toEqual(9.9);
    expect(convertWeightProblem(4, 8)).toEqual(9.9);
    expect(convertWeight(4, 8)).toEqual(9.9);
  });

  it('round to a decimal place', () => {
    expect(convertWeightProblem(4, 4, 2)).toEqual(9.35);
    expect(convertWeight(4, 4, 2)).toEqual(9.35);
    expect(convertWeightProblem(4, undefined, 2)).toEqual(8.8);
    expect(convertWeight(4, undefined, 2)).toEqual(8.8);
  });

  it('should round correctly with falsy value', () => {
    expect(convertWeightProblem(4, 4, 0)).toEqual(9);
    expect(convertWeight(4, 4, 0)).toEqual(9);
  });
});
