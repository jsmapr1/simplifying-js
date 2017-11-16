import expect from 'expect';
import { getInstruments, getInstruments2 } from './map';
import { getInstruments as g1, getInstruments2 as g2 } from './full';

describe('full loops', () => {
  const band = [
    {
      name: 'corbett',
      instrument: 'guitar',
    },
    {
      name: 'evan',
      instrument: 'guitar',
    },
    {
      name: 'sean',
      instrument: 'bass',
    },
    {
      name: 'brett',
      instrument: 'drums',
    },
  ];

  it('should get instruments', () => {
    expect(g1(band)).toEqual(['guitar', 'guitar', 'bass', 'drums']);
  });

  it('should get instruments with anonymous function', () => {
    expect(g2(band)).toEqual(['guitar', 'guitar', 'bass', 'drums']);
  });
});

describe('map', () => {
  it('should get instruments', () => {
    expect(getInstruments()).toEqual(['guitar', 'guitar', 'bass', 'drums']);
  });

  it('should get instruments with anonymous function', () => {
    expect(getInstruments2()).toEqual(['guitar', 'guitar', 'bass', 'drums']);
  });
});
