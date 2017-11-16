import expect from 'expect';
import { failMusic, failUserPreference, getArtist, getMusic, getUserPreferences } from './promises';
import {
  getUserPreferences as prefProblem,
} from './problem';

describe('promises', () => {
  it('should resolve with data', done => {
    return prefProblem(data => {
      expect(data.theme.toUpperCase()).toEqual('DUSK');
      done();
    });
  });

  it('should resolve with data', () => {
    return getUserPreferences().then(data => {
      expect(data.theme).toEqual('dusk');
    });
  });
  it('should fail', () => {
    return failUserPreference()
      .catch(data => {
        expect(data.type).toEqual('Access Denied');
      });
  });
  it('should chain success', () => {
    return getUserPreferences()
      .then(preference => {
        return getMusic(preference.theme);
      })
      .then(music => {
        expect(music.album).toEqual('Music for Airports');
      });
  });

  it('should catch failure', () => {
    return getUserPreferences()
      .then(preference => failMusic(preference.theme))
      .then(music => getArtist(music.album))
      .catch(e => {
        expect(e.type).toEqual('Network error');
      });
  });
});
