import expect from 'expect';
import { greetWithExcitement, key, capitalize, greet, formatUser } from './arrow';
import {
  key as keyF,
  capitalize as capitalizeF,
  formatUser as formatUserF,
  greetWithExcitement as greetWithExcitementF,
} from './full';

describe('full functions', () => {
  it('should take no parameters', () => {
    expect(keyF()).toEqual('abc123');
  });

  it('should take one parameter', () => {
    expect(capitalizeF('joe')).toEqual('Joe');
  });

  it('should take several parameters', () => {
    expect(greetWithExcitementF('joe')).toEqual('Hi, Joe!');
  });

  it('should have implicit return', () => {
    expect(formatUserF('joe')).toEqual('Joe is logged in.');
  });

  it('should take a callback', () => {
    expect(greetWithExcitementF()).toEqual('Hi, Joe!');
  });
});

describe('arrow functions', () => {
  it('should take no parameters', () => {
    expect(key()).toEqual('abc123');
  });

  it('should take one parameter', () => {
    expect(capitalize('joe')).toEqual('Joe');
  });

  it('should take several parameters', () => {
    expect(greet('joe', 'morgan')).toEqual('Hello, Joe Morgan');
  });

  it('should have implicit return', () => {
    expect(formatUser('joe')).toEqual('Joe is logged in.');
  });

  it('should take a callback', () => {
    expect(greetWithExcitement()).toEqual('Hi, Joe!');
  });
});
