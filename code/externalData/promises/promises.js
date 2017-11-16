/* eslint-disable no-unused-vars, no-console */

// START:pref
function getUserPreferences() {
  const preferences = new Promise((resolve, reject) => {
    resolve({
      theme: 'dusk',
    });
  });
  return preferences;
}

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

failUserPreference()
  .then(preferences => {
  // This won't execute
    console.log(preferences.theme);
  })
  .catch(error => {
    console.error(`Fail: ${error.type}`);
  });
// Fail: Access Denied
// END:fail

// START:music
function getMusic(theme) {
  if (theme === 'dusk') {
    return Promise.resolve({
      album: 'Music for Airports',
    });
  }
  return Promise.resolve({
    album: 'kind of blue',
  });
}

getUserPreferences()
  .then(preference => {
    return getMusic(preference.theme);
  })
  .then(music => {
    console.log(music.album);
  });
// Music for Aiports
// END:music

// START:arrow
getUserPreferences()
  .then(preference => getMusic(preference.theme))
  .then(music => { console.log(music.album); });
// END:arrow

// START:single
function failMusic(theme) {
  return Promise.reject({
    type: 'Network error',
  });
}

function getArtist(album) {
  return Promise.resolve({
    artist: 'Brian Eno',
  });
}

getUserPreferences()
  .then(preference => failMusic(preference.theme))
  .then(music => getArtist(music.album))
  .catch(e => {
    console.log(e)
  });
// END:single

export { failUserPreference, failMusic, getArtist, getMusic, getUserPreferences };
