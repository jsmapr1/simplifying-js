import expect from 'expect';
import {
  mergeProgramInformation as mergeProblem,
} from './problem';
import {
  setStrongHallProgram,
} from './program';

import {
  building,
  exhibit,
  manager,
  mergeProgramInformation,
  program,
  zip,
} from './partial';

describe('partially applied functions', () => {
  const programInfo = {
    name: 'Presenting Research',
    room: '415',
    hours: '3 - 6',
    address: 'Jayhawk Blvd',
    contact: 'Augusto',
    phone: '555-555-5555',
  };
  const exhibitInfo = {
    name: 'Emerging Scholarship',
    contact: 'Dyan',
    hours: '8 a.m. - 8 p.m.',
    address: 'Jayhawk Blvd',
    phone: '555-555-5555',
  };

  it('should merge program information', () => {
    expect(mergeProblem(building, manager, program)).toEqual(programInfo);
    expect(mergeProblem(building, manager, exhibit)).toEqual(exhibitInfo);
  });

  it('should merge program information', () => {
    expect(mergeProgramInformation(building, manager)(program)).toEqual(programInfo);
    expect(mergeProgramInformation(building, manager)(exhibit)).toEqual(exhibitInfo);
  });

  it('should encapsulate some information', () => {
    expect(setStrongHallProgram(program)).toEqual(programInfo);
    expect(setStrongHallProgram(exhibit)).toEqual(exhibitInfo);
  });

  it('should zip together information', () => {
    const states = ['kansas', 'wisconsin', 'new mexico'];
    const birds = ['meadowlark', 'robin', 'roadrunner'];
    expect(zip(...states)(...birds)).toEqual([
      ['kansas', 'meadowlark'],
      ['wisconsin', 'robin'],
      ['new mexico', 'roadrunner'],
    ]);
  });
});
