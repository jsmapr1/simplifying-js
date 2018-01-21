/* eslint-disable no-unused-vars, no-console */

// START:define
function getUserPreferences() {
  const preferences = new Promise((resolve, reject) => {
    resolve({
      theme: 'dusk',
    });
  });
  return preferences;
}
// END:define

// START:pref
getUserPreferences()
  .then(preferences => {
    console.log(preferences.theme);
  });
// 'dusk'
// END:pref

// START:fail
function failUserPreference() {
  const finder = new Promise((resolve, reject) => {
    reject({
      type: 'Access Denied',
    });
  });
  return finder;
}
// END:fail

// START:catch
failUserPreference()
  .then(preferences => {
  // This won't execute
    console.log(preferences.theme);
  })
  .catch(error => {
    console.error(`Fail: ${error.type}`);
  });
// Fail: Access Denied
// END:catch

// START:music
function getMusic(theme) {
  if (theme === 'dusk') {
    return Promise.resolve({
      album: 'music for airports',
    });
  }
  return Promise.resolve({
    album: 'kind of blue',
  });
}
// END:music

// START:chain
getUserPreferences()
  .then(preference => {
    return getMusic(preference.theme);
  })
  .then(music => {
    console.log(music.album);
  });
// music for airports
// END:chain

// START:arrow
getUserPreferences()
  .then(preference => getMusic(preference.theme))
  .then(music => { console.log(music.album); });
// END:arrow

// START:artist
function getArtist(album) {
  return Promise.resolve({
    artist: 'Brian Eno',
  });
}
// END:artist

// START:single
function failMusic(theme) {
  return Promise.reject({
    type: 'Network error',
  });
}

getUserPreferences()
  .then(preference => failMusic(preference.theme))
  .then(music => getArtist(music.album))
  .catch(e => {
    console.log(e);
  });
// END:single

export { failUserPreference, failMusic, getArtist, getMusic, getUserPreferences };
