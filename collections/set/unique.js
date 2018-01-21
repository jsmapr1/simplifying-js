// #START:dog
const dogs = [
  {
    name: 'max',
    size: 'small',
    breed: 'boston terrier',
    color: 'black',
  },
  {
    name: 'don',
    size: 'large',
    breed: 'labrador',
    color: 'black',
  },
  {
    name: 'shadow',
    size: 'medium',
    breed: 'labrador',
    color: 'chocolate',
  },
];
// #END:dogs
// #START:colors
function getColors(dogs) {
  return dogs.map(dog => dog.color);
}

getColors(dogs);

// ['black', 'black', 'chocolate']

// #END:colors

// #START:unique

function getUnique(attributes) {
  const unique = [];
  for (const attribute of attributes) {
    if (!unique.includes(attribute)) {
      unique.push(attribute);
    }
  }
  return unique;
}

const colors = getColors(dogs);
getUnique(colors);
// ['black', 'chocolate']

// #END:unique

export { getColors, getUnique };
