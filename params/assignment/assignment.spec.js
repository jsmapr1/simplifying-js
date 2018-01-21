import expect from 'expect';
import {
  landscape,
  setRegion,
  getCityAndState,
  update,
} from './assignment';

describe('set region information', () => {
  it('should add city and state', () => {
    expect(setRegion(landscape)).toEqual(update);
  });

  it('should get the city and state', () => {
    expect(getCityAndState(landscape)).toEqual({
      city: 'Hobbs',
      state: 'NM',
    });
  });
});
