import expect from 'expect';

import { validator } from './context';

import {
  validator as validatorBasic,
} from './basic';

import {
  validator as validatorProblem,
} from './problem';

import {
  validator as validatorMethod,
} from './method';


describe('validation', () => {
  const field = 'city';
  it('should set invalid message', () => {
    const message = 'city is invalid.';
    expect(validatorBasic.setInvalidMessage(field)).toEqual(message);
  });
  it('should not access context on map function', () => {
    try {
      // START: problem
      validatorProblem.setInvalidMessages(field);
      // TypeError: Cannot read property 'message' of undefined
      // END: problem
    } catch (e) {
      expect(e.message).toEqual("Cannot read property 'message' of undefined");
    }
  });

  it('should access context with arrow function', () => {
    const messages = ['city is invalid.'];
    expect(validator.setInvalidMessages(field)).toEqual(messages);
  });

  it('should not access context on map function', () => {
    try {
      // START: problemMethod
      validatorMethod.setInvalidMessage(field);
      // TypeError: Cannot read property 'message' of undefined
      // END: problemMethod
    } catch (e) {
      expect(e.message).toEqual("Cannot read property 'message' of undefined");
    }
  });
});
