import expect from 'expect';
import {
  checkConflicts,
  firms,
} from './for';

import {
  checkConflicts as checkIn,
  firms as firmsIn,
} from './forin';

import {
  checkConflicts as checkConflictsFull,
  findConflicts,
} from './full';

import {
  checkConflicts as checkConflictsTrad,
} from './traditional';

describe('for loop on Map', () => {
  it('should return false on negative result', () => {
    const soundscapeUnavailable = id => id !== 23;
    expect(checkConflicts(firms, soundscapeUnavailable)).toEqual('Soundscaping Source is not available');
  });

  it('should return false on negative result for full with find', () => {
    const soundscapeUnavailable = id => id !== 23;
    expect(findConflicts(firms, soundscapeUnavailable)).toEqual('Soundscaping Source is not available');
  });

  it('should return false on negative result for full', () => {
    const soundscapeUnavailable = id => id !== 23;
    expect(checkConflictsFull(firms, soundscapeUnavailable)).toEqual('Soundscaping Source is not available');
  });

  it('should return false on negative result for traditional', () => {
    const soundscapeUnavailable = id => id !== 23;
    expect(checkConflictsTrad(firms, soundscapeUnavailable)).toEqual('Soundscaping Source is not available');
  });

  it('should return true on positive result', () => {
    const alwaysTrue = id => id;
    expect(checkConflicts(firms, alwaysTrue)).toEqual('All firms are available');
  });

  it('should return true on positive result for full', () => {
    const alwaysTrue = id => id;
    expect(checkConflictsFull(firms, alwaysTrue)).toEqual('All firms are available');
  });

  it('should return true on positive result for full with find', () => {
    const alwaysTrue = id => id;
    expect(findConflicts(firms, alwaysTrue)).toEqual('All firms are available');
  });

  it('should return true on positive result for full', () => {
    const alwaysTrue = id => id;
    expect(checkConflictsTrad(firms, alwaysTrue)).toEqual('All firms are available');
  });
});

describe('for loop on objects', () => {
  it('should return false on negative result for traditional', () => {
    const soundscapeUnavailable = id => id !== 23;
    expect(checkIn(firmsIn, soundscapeUnavailable)).toEqual('Soundscaping Source is not available');
  });

  it('should return true on positive result', () => {
    const alwaysTrue = id => id;
    expect(checkIn(firmsIn, alwaysTrue)).toEqual('All firms are available');
  });
});
