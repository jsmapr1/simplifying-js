/* eslint-disable no-unused-vars */
// START:landscape
const landscape = {
  title: 'Landscape',
  photographer: 'Nathan',
  location: [32.7122222, -103.1405556],
};
// END:landscape

const update =
// START:update
{
  title: 'Landscape',
  photographer: 'Nathan',
  city: 'Hobbs',
  state: 'NM',
};
// END:update

function determineCityAndState([latitude, longitude]) {
  // Geo lookup would happen here
  // START:region
  const region = {
    city: 'Hobbs',
    county: 'Lea',
    state: {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
  };
  // END:region
  return region;
}
// START:handle
function getCityAndState({ location }) {
  const { city, state } = determineCityAndState(location);
  return {
    city,
    state: state.abbreviation,
  };
  // {
  //   city: 'Hobbs',
  //   state: 'NM'
  // }
}
// END:handle

// START:set
function setRegion({ location, ...details }) {
  const { city, state } = determineCityAndState(location);
  return {
    city,
    state: state.abbreviation,
    ...details,
  };
}
// END:set


export { landscape, getCityAndState, setRegion, update };
