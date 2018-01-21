import expect from 'expect';

import {
  Validator as ValidatorProblem,
} from './problem';

import { Validator } from './bind';

import {
  Validator as ValidatorArrow,
} from './constructorArrow';

import {
  Validator as ValidatorConstructor,
} from './constructor';

import {
  Validator as ValidatorProperties,
} from './properties';

describe('Validator', () => {
  it('should not bind to this', () => {
    try {
      // START: problem
      const validator = new ValidatorProblem();
      validator.setInvalidMessages('city');
      // TypeError: Cannot read property 'message' of undefined
      // END: problem
    } catch (e) {
      expect(e.message).toEqual("Cannot read property 'message' of undefined");
    }
  });

  it('should bind methods in map function', () => {
    const v = new Validator();
    const message = 'city is invalid.';
    expect(v.setInvalidMessages('city')).toEqual([message]);
  });

  it('should use arrow methods in constructor', () => {
    const v = new ValidatorArrow();
    const message = 'city is invalid.';
    expect(v.setInvalidMessages('city')).toEqual([message]);
  });

  it('should bind methods in constructor', () => {
    const v = new ValidatorConstructor();
    const message = 'city is invalid.';
    expect(v.setInvalidMessages('city')).toEqual([message]);
  });

  it('should have private properties', () => {
    const v = new ValidatorProperties();
    expect(v.message).toEqual('is invalid.');
  });

  it('should bind this with arrow functions', () => {
    const v = new ValidatorProperties();
    const message = 'city is invalid.';
    expect(v.setInvalidMessages('city')).toEqual([message]);
  });
});
