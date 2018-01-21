/* eslint-disable */
// START:dogs
const dogs = [
  {
    name: 'max',
    weight: 10,
    breed: 'boston terrier',
    state: 'wisconsin',
    color: 'black',
  },
  {
    name: 'don',
    weight: 90,
    breed: 'labrador',
    state: 'kansas',
    color: 'black',
  },
  {
    name: 'shadow',
    weight: 40,
    breed: 'labrador',
    state: 'wisconsin',
    color: 'chocolate',
  },
];
// END:dogs

// START: func
function getDogNames(dogs, filterFunc) {
  return dogs
  .filter(filterFunc)
  .map(dog => dog.name)
}

getDogNames(dogs, dog => dog.weight < 20);
// ['max']
// END: func

// START:curry
const weightCheck = weight => dog => dog.weight < weight;

getDogNames(dogs, weightCheck(20));
// ['max']

getDogNames(dogs, weightCheck(50));
// ['max', 'shadow']
// END:curry

// START:identity
const identity = field => value => dog => dog[field] === value;
const colorCheck = identity('color');
const stateCheck = identity('state');

getDogNames(dogs, colorCheck('chocolate'));
// ['shadow']

getDogNames(dogs, stateCheck('kansas'));
// ['don']
// END:identity

// START:all
function allFilters(dogs, ...checks) {
  return dogs
  .filter(dog => checks.every(check => check(dog)))
  .map(dog => dog.name);
}
allFilters(dogs, colorCheck('black'), stateCheck('kansas'));
// ['Don']

function anyFilters(dogs, ...checks) {
  return dogs
  .filter(dog => checks.some(check => check(dog)))
  .map(dog => dog.name);
}

anyFilters(dogs, weightCheck(20), colorCheck('chocolate'));
// ['max', 'shadow']
// END:all

export { anyFilters, dogs, getDogNames, colorCheck, weightCheck, stateCheck, allFilters }
