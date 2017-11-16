import expect from 'expect';

import {
  getAppliedFilters as getObject,
  getSortedAppliedFilters as getSortObject,
} from './object';

import {
  getAppliedFilters as getIterate,
  getSortedAppliedFilters as getSortIterate,
} from './iterate';

import {
  getAppliedFilters,
  getSortedAppliedFilters,
} from './mapSpread';

describe('object get', () => {
  it('should get key-values from object', () => {
    const filters = {
      color: 'black',
      breed: 'labrador',
    };
    expect(getObject(filters)).toEqual('Your filters are: color:black, breed:labrador.');
  });

  it('should get sorted key-values from object', () => {
    const filters = {
      color: 'black',
      breed: 'labrador',
    };
    expect(getSortObject(filters)).toEqual('Your filters are: breed:labrador, color:black.');
  });
});

describe('map iterate', () => {
  it('should get key-values from object', () => {
    const filters = new Map()
      .set('color', 'black')
      .set('breed', 'labrador');

    expect(getIterate(filters)).toEqual('Your filters are: color:black, breed:labrador.');
  });

  it('should get sorted key-values from object', () => {
    const filters = new Map()
      .set('color', 'black')
      .set('breed', 'labrador');

    expect(getSortIterate(filters)).toEqual('Your filters are: breed:labrador, color:black.');
  });
});

describe('map spread', () => {
  it('should get key-values from object', () => {
    const filters = new Map()
      .set('color', 'black')
      .set('breed', 'labrador');

    expect(getAppliedFilters(filters)).toEqual('Your filters are: color:black, breed:labrador.');
  });

  it('should get sorted key-values from object', () => {
    const filters = new Map()
      .set('color', 'black')
      .set('breed', 'labrador');

    expect(getSortedAppliedFilters(filters)).toEqual('Your filters are: breed:labrador, color:black.');
  });
});
