import expect from 'expect';

import { developers, dogs, getAllColors, getColors, getSpecialtyCount, greetCity, separate } from './reduce';
import { getColors as mistakeColors } from './mistake';
import { getAllColors as mapColors } from './map';

describe('reduce', () => {
  it('gets the dog colors', () => {
    expect(getColors(dogs)).toEqual(['black', 'chocolate']);
  });

  it('gets noting when not returned', () => {
    let name;
    let message;
    try {
      mistakeColors(dogs);
    } catch (e) {
      name = e.constructor.name;
      message = e.message;
    }
    expect(name).toEqual('TypeError');
    expect(message).toEqual("Cannot read property 'includes' of undefined");
  });

  it('should get all colors with map or reduce', () => {
    const colors = getAllColors(dogs);
    const colorsMap = mapColors(dogs);
    const result = ['black', 'black', 'chocolate'];
    expect(colors).toEqual(result);
    expect(colorsMap).toEqual(result);
  });

  it('should get all unique properties', () => {
    const filters = separate(dogs);
    expect([...filters.breed]).toEqual(['boston terrier', 'labrador']);
    expect([...filters.size]).toEqual(['small', 'large', 'medium']);
    expect([...filters.color]).toEqual(['black', 'chocolate']);
  });

  it('should get developer count', () => {
    const result = {
      javascript: 1,
      php: 1,
      python: 2,
    };
    expect(getSpecialtyCount(developers)).toEqual(result);
  });

  it('should pipe results', () => {
    expect(greetCity('kansas city')).toEqual('Greetings from Kansas City!');
  });
});
