import expect from 'expect';
import {
  alphabetizeTeam,
  dogPair,
  getMusicians,
  getName,
  getTotalStats,
  staff,
  team,
} from './arrays';

describe('array actions', () => {
  it('should alphabetize team', () => {
    expect(alphabetizeTeam(team)).toEqual([
      'Bea',
      'Dyan',
      'Joe',
      'Theo',
    ]);
  });

  it('should get musicians', () => {
    expect(getMusicians(staff)).toEqual([
      {
        name: 'Wesley',
        position: 'musician',
      },
    ]);
  });

  it('should get name', () => {
    expect(getName(dogPair)).toEqual('Don');
  });

  it('should calculate stats', () => {
    expect(getTotalStats()).toEqual({
      hits: 5,
      runs: 1,
      errors: 1,
    });
  });
});
