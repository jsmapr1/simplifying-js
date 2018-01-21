// START: name
const name = {
  first: 'Lemmy',
  last: 'Kilmister',
};

function getName({ first, last }) {
  return `${first} ${last}`;
}
// END: name

// START: full
function getFullName({ first, last }) {
  return {
    fullName: `${first} ${last}`,
  };
}
// END: full

// START: high
const discounter = discount => {
  return price => {
    return price * (1 - discount);
  };
};
const tenPercentOff = discounter(0.1);
tenPercentOff(100);
// 90
// END: high

export { getName, getFullName, discounter, name };
