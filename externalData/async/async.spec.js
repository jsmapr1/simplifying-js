import expect from 'expect';
import { getArtistByPreference, getTheme } from './async';
import { getArtistByPreference as catchPref } from './catch';

describe('async', () => {
  it('should await an action', () => {
    return getTheme()
      .then(theme => {
        expect(theme).toEqual('dusk');
      });
  });

  it('should await on multiples actions', () => {
    return getArtistByPreference()
      .then(artist => {
        expect(artist).toEqual('Brian Eno');
      });
  });

  it('should catch an error', () => {
    return catchPref()
      .then(() => {
        // Hitting this block is an error.
        expect(false).toEqual(true);
      })
      .catch(e => {
        expect(e.type).toEqual('Network error');
      });
  });
});
