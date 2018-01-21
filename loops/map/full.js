function getInstruments(band) {
// START:getInstruments
  const instruments = [];
  for (let i = 0; i < band.length; i++) {
    const instrument = band[i].instrument; // <label id="instrument"/>
    instruments.push(instrument); // <label id="push"/>
  }
  // END:getInstruments
  return instruments;
}

// START:getInstrument
function getInstrument(member) {
  return member.instrument;
}
// END:getInstrument

function getInstruments2(band) {
// START:getInstruments2
  const instruments = [];
  for (let i = 0; i < band.length; i++) {
    instruments.push(getInstrument(band[i]));
  }
  // END:getInstruments2
  return instruments;
}

export { getInstruments, getInstruments2 };
