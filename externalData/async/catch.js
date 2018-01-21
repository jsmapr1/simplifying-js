/* eslint-disable no-console */
import { getArtist, getUserPreferences, failMusic } from '../promises/promises';
// START: artist
async function getArtistByPreference() {
  const { theme } = await getUserPreferences();
  const { album } = await failMusic(theme);
  const { artist } = await getArtist(album);
  return artist;
}

getArtistByPreference()
  .then(artist => {
    console.log(artist);
  })
  .catch(e => {
    console.error(e);
  });
// END: artist

export { getArtistByPreference };
