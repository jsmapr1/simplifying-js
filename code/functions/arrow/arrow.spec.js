import expect from 'expect';

import {
  discounter as discountProblem,
  getFullName as fullProblem,
  getName as nameProblem,
  name,
} from './problem';

import {
  comic,
  discounter,
  getFullName,
  getName,
  getNameAndLocation,
} from './arrow';

describe('problems', () => {
  it('should get a name', () => {
    expect(nameProblem(name)).toEqual('Lemmy Kilmister');
  });

  it('should return an object', () => {
    expect(fullProblem(name)).toEqual({ fullName: 'Lemmy Kilmister' });
  });

  it('should return a high order function', () => {
    expect(discountProblem(0.1)(100)).toEqual(90);
  });
});

describe('arrow functions', () => {
  it('should destructure inputs', () => {
    expect(getName(comic)).toEqual('Peter Bagge');
  });

  it('should return an object', () => {
    expect(getFullName(comic)).toEqual({ fullName: 'Peter Bagge' });
  });

  it('should return an object', () => {
    expect(getNameAndLocation(comic)).toEqual({
      fullName: 'Peter Bagge',
      location: 'Seattle, Washington',
    });
  });

  it('should return a high order function', () => {
    expect(discounter(0.1)(100)).toEqual(90);
  });
});
