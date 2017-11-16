import expect from 'expect';
import {
  applyBreedPreference,
  clearPreferences,
  getSavedBreed,
  removeBreed,
  retrievePreferences,
  saveBreed,
  savePreferences,
} from './local';

describe('localstorage', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should set breed', () => {
    saveBreed('labrador');
    expect(localStorage.getItem('breed')).toEqual('labrador');
  });

  it('should get breed', () => {
    saveBreed('labrador');
    expect(localStorage.getItem('breed')).toEqual('labrador');
  });

  it('should remove breed', () => {
    saveBreed('labrador');
    expect(localStorage.getItem('breed')).toEqual('labrador');
    removeBreed();
    expect(localStorage.getItem('breed')).toEqual(undefined);
  });

  it('apply filters', () => {
    const defaults = new Map();
    saveBreed('labrador');
    const filters = applyBreedPreference(defaults);
    expect(filters.get('breed')).toEqual('labrador');
  });

  it('should save all preferences', () => {
    const filters = new Map()
      .set('color', 'black');
    savePreferences(filters);
    expect(localStorage.getItem('preferences')).toEqual('[["color","black"]]');
  });

  it('should retrieve all preferences', () => {
    localStorage.setItem('preferences', '[["color","black"]]');
    const prefences = retrievePreferences();
    expect(prefences.get('color')).toEqual('black');
  });
});
