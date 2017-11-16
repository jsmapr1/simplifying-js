/* eslint-disable no-unused-vars */

// #START:band
const band = [
  {
    name: 'corbett',
    instrument: 'guitar',
  },
  {
    name: 'evan',
    instrument: 'guitar',
  },
  {
    name: 'sean',
    instrument: 'bass',
  },
  {
    name: 'brett',
    instrument: 'drums',
  },
];
// #END:band


function getInstruments() {
// START:getInstruments
  function getInstrument(member) {
    return member.instrument;
  }

  const instruments = band.map(getInstrument);
  // ['guitar', 'guitar', 'bass', 'drums']
  // END:getInstruments
  return instruments;
}

function getInstruments2() {
// START:getInstruments2

  const instruments = band.map(member => member.instrument);
  // ['guitar', 'guitar', 'bass', 'drums']
  // END:getInstruments2
  return instruments;
}

function getDogs(env) {
  return () => {
    if (env === 'production') {
      return fetch('http://dog.foo');
    }
    return fetch('http://localhost:8888');
  };
}

function getCats(env) {
  return () => {
    if (env === 'production') {
      return fetch('http://dog.foo');
    }
    return fetch('http://localhost:8888');
  };
}

function setUpLocal(...fetchers) {
  return fetchers.map(fetcher => fetcher('local'));
}

export { getInstruments, getInstruments2 };
