import expect from 'expect';
import {
  validateCharacterCount as validateSimple,
} from './simple';
import {
  getArguments as getArgumentsProblem,
  validateCharacterCount as validateProblem,
} from './problem';

import {
  getArguments,
  shift,
  validateCharacterCount,
} from './rest';

describe('validate character simple', () => {
  it('should be correct when passed an array', () => {
    expect(validateSimple(5, ['red', 'blue'])).toEqual(true);
    expect(validateSimple(5, ['red', 'blue', 'yellow'])).toEqual(false);
  });
  it('should be incorrect when passed a list', () => {
    try {
      validateSimple(5, 'red', 'blue');
    } catch (e) {
      expect(e instanceof TypeError).toBe(true);
      expect(e.message).toEqual('items.every is not a function');
    }
  });
});

describe('validate character problem', () => {
  it('should check all characters are below limit', () => {
    expect(validateProblem(5, 'red', 'blue')).toEqual(true);
    expect(validateProblem(5, 'red', 'blue', 'yellow')).toEqual(false);
  });
  it('should is incorrect when passed an array', () => {
    expect(validateProblem(5, ['red', 'blue'])).toEqual(true);
    expect(validateProblem(5, ['red', 'blue', 'yellow'])).toEqual(true);
  });
  it('should get arguments', () => {
    expect(getArgumentsProblem('Bloomsday', 'June 16')[0]).toBe('Bloomsday');
    expect(getArgumentsProblem('Bloomsday', 'June 16')[1]).toBe('June 16');
  });
});

describe('validate character problem', () => {
  it('should check all characters are below limit', () => {
    expect(validateCharacterCount(5, 'red', 'blue')).toEqual(true);
    expect(validateCharacterCount(5, 'red', 'blue', 'yellow')).toEqual(false);
  });
  it('should be correct when passed an array with spread', () => {
    expect(validateProblem(5, ...['red', 'blue'])).toEqual(true);
    expect(validateProblem(5, ...['red', 'blue', 'yellow'])).toEqual(false);
  });
  it('should get arguments', () => {
    expect(getArguments('Bloomsday', 'June 16')).toEqual(['Bloomsday', 'June 16']);
  });
  it('should shift array', () => {
    expect(shift()).toEqual(['stop', ['collaborate', 'listen']]);
  });
});
