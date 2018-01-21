// START: name
const comic = {
  first: 'Peter',
  last: 'Bagge',
  city: 'Seattle',
  state: 'Washington',
};

const getName = ({ first, last }) => `${first} ${last}`;
getName(comic);
// Peter Bagge
// END: name

// START: return
const getFullName = ({ first, last }) => ({ fullName: `${first} ${last}` });
getFullName(comic);
// { fullName: 'Peter Bagge' }
// END: return

// START:multi
const getNameAndLocation = ({ first, last, city, state }) => ({
  fullName: `${first} ${last}`,
  location: `${city}, ${state}`,
});
getNameAndLocation(comic);
// {
//   fullName: 'Peter Bagge',
//   location: 'Seattle, Washington'
// }
// END:multi

// START: high
const discounter = discount => price => price * (1 - discount);

const tenPercentOff = discounter(0.1);
tenPercentOff(100);
// 90;
// END: high

// START: together
discounter(0.1)(100);
// 90
// END: together

export { comic, discounter, getName, getNameAndLocation, getFullName };
