import expect from 'expect';

import { applyDefaults } from './map';

import { applyDefaults as applySideEffects } from './sideEffects';

import { applyDefaults as applyCopy } from './copy';

describe('apply defaults to a map', () => {
  it('should mutate the original', () => {
    const defaults = new Map()
      .set('color', 'brown')
      .set('breed', 'beagle')
      .set('state', 'kansas');


    const filters = new Map()
      .set('color', 'black');

    applySideEffects(filters, defaults);

    expect(filters.get('color')).toEqual('black');
    expect(filters.get('state')).toEqual('kansas');
  });

  it('should set new key-value', () => {
    const defaults = new Map()
      .set('color', 'brown')
      .set('breed', 'beagle')
      .set('state', 'kansas');


    const filters = new Map()
      .set('color', 'black');

    const update = applyCopy(filters, defaults);
    expect(update.get('color')).toEqual('black');
    expect(update.get('state')).toEqual('kansas');
  });

  it('should set new key-value', () => {
    const defaults = new Map()
      .set('color', 'brown')
      .set('breed', 'beagle')
      .set('state', 'kansas');


    const filters = new Map()
      .set('color', 'black');

    const update = applyDefaults(filters, defaults);
    expect(update.get('color')).toEqual('black');
    expect(update.get('state')).toEqual('kansas');
  });
});
