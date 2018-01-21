/* eslint-disable no-console */
import { getArtist, getMusic, getUserPreferences } from '../promises/promises';

// START: call
async function getTheme() {
  const { theme } = await getUserPreferences();
  return theme;
}
// END: call

// START: theme
getTheme()
  .then(theme => {
    console.log(theme);
  });
// END: theme

// START:artist
async function getArtistByPreference() {
  const { theme } = await getUserPreferences();
  const { album } = await getMusic(theme);
  const { artist } = await getArtist(album);
  return artist;
}

getArtistByPreference()
  .then(artist => {
    console.log(artist);
  });
// END:artist

export { getArtistByPreference, getTheme };
