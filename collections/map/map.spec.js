import expect from 'expect';

import {
  addFilters,
  clearFilters,
  deleteFilters,
} from './map';

import {
  addFilters as addFiltersObject,
  clearFilters as clearFiltersObject,
  deleteFilters as deleteFiltersObject,
} from './problem';

describe('Map tests', () => {
  it('should set value on object', () => {
    const filters = {
      color: 'brown',
    };
    addFiltersObject(filters, 'size', 'large');
    expect(filters.size).toEqual('large');
  });

  it('should delete the value on object', () => {
    const filters = {
      color: 'brown',
      size: 'large',
    };
    deleteFiltersObject(filters, 'color');
    expect(filters).toEqual({ size: 'large' });
  });

  it('should clear the object', () => {
    let filters = {
      color: 'brown',
      size: 'large',
    };
    filters = clearFiltersObject(filters);
    expect(filters).toEqual({});
  });

  it('should set value on object', () => {
    const filters = new Map().set('color', 'brown');
    addFilters(filters, 'size', 'large');
    expect(filters.get('size')).toEqual('large');
  });

  it('should delete the value on object', () => {
    const filters = new Map()
      .set('color', 'brown')
      .set('size', 'large');
    deleteFilters(filters, 'color');
    expect([...filters.keys()]).toEqual(['size']);
  });

  it('should clear the object', () => {
    const filters = new Map()
      .set('color', 'brown')
      .set('size', 'large');
    clearFilters(filters);
    expect([...filters.keys()]).toEqual([]);
  });
});
