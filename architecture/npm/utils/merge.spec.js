import expect from 'expect';
import { mapToObject, objectToMap } from './merge';

describe('utilities', () => {
  it('should convert map to object', () => {
    const simple = new Map().set('name', 'joe');
    expect(mapToObject(simple)).toEqual({ name: 'joe' });
  });
  it('should convert object to map', () => {
    const person = { name: 'joe' };
    const simple = new Map().set('name', 'joe');
    expect(objectToMap(person)).toEqual(simple);
  });
});
