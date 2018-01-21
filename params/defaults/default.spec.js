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
    expect(convertWeightSimple(44)).toEqual(20);
    expect(convertWeightMore(44)).toEqual(20);
    expect(convertWeightProblem(44)).toEqual(20);
    expect(convertWeight(44)).toEqual(20);
  });

  it('should convert pounds and grams', () => {
    expect(convertWeightMore(44, 11)).toEqual(20.3125);
    expect(convertWeightProblem(44, 11)).toEqual(20.31);
    expect(convertWeight(44, 11)).toEqual(20.31);
  });

  it('round to a decimal place', () => {
    expect(convertWeightProblem(44, 8, 2)).toEqual(20.23);
    expect(convertWeight(44, 8, 2)).toEqual(20.23);
    expect(convertWeightProblem(44, undefined, 2)).toEqual(20);
    expect(convertWeight(44, undefined, 2)).toEqual(20);
  });

  it('should round correctly with falsy value', () => {
    expect(convertWeightProblem(44, 11, 0)).toEqual(20);
    expect(convertWeight(44, 11, 0)).toEqual(20);
  });
});
