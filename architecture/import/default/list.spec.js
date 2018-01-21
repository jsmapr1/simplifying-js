import expect from 'expect';
import { getAddressByRegion } from './list';

const clubs = [
  {
    name: 'CBGB',
    address: {
      street: '315 bowery',
      city: 'New York',
      state: 'ny',
    },
  },
  {
    name: 'Saint Vitus',
    address: {
      street: '1120 manhattan ave',
      city: 'Brooklyn',
      state: 'NY',
    },
  },
];

describe('list', () => {
  it('should compile clubs', () => {
    expect(getAddressByRegion(clubs)).toEqual({
      NY: [
        '315 Bowery New York, NY',
        '1120 Manhattan Ave Brooklyn, NY',
      ],
    });
  });
});
