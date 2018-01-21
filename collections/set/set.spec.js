import expect from 'expect';

import {
  getUnique as uniqueLoop,
} from './unique';

import {
  getUnique,
  getUniqueColors,
  getUniqueColorsReduce,
} from './set';

describe('set', () => {
  it('should get unique with a loop', () => {
    const colors = ['black', 'black', 'chocolate', 'yellow'];
    expect(uniqueLoop(colors)).toEqual(['black', 'chocolate', 'yellow']);
  });

  it('should get unique with Set', () => {
    const colors = ['black', 'black', 'chocolate', 'yellow'];
    expect(getUnique(colors)).toEqual(['black', 'chocolate', 'yellow']);
  });

  it('should get unique colors Set', () => {
    const dogs = [
      {
        name: 'max',
        size: 'small',
        breed: 'boston terrier',
        color: 'black',
      },
      {
        name: 'don',
        size: 'large',
        breed: 'labrador',
        color: 'black',
      },
      {
        name: 'shadow',
        size: 'medium',
        breed: 'labrador',
        color: 'chocolate',
      },
    ];
    expect(getUniqueColors(dogs)).toEqual(['black', 'chocolate']);
  });

  it('should get unique colors with Set and reducer', () => {
    const dogs = [
      {
        name: 'max',
        size: 'small',
        breed: 'boston terrier',
        color: 'black',
      },
      {
        name: 'don',
        size: 'large',
        breed: 'labrador',
        color: 'black',
      },
      {
        name: 'shadow',
        size: 'medium',
        breed: 'labrador',
        color: 'chocolate',
      },
    ];
    expect(getUniqueColorsReduce(dogs)).toEqual(['black', 'chocolate']);
  });
});
