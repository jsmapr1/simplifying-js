/* eslint-disable no-unused-vars, func-names */

// Courtesy of Eric Elliot: https://twitter.com/_ericelliott/status/879356131633762305
// #START:pipe
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// #END:pipe

// Need clever idea
function greetCity(city) {
// #START:pipeCity
  function capitalize(word) {
    return word.split(' ')
      .map(s => s.slice(0, 1).toUpperCase() + s.slice(1))
      .join(' ');
  }

  function greet(location) {
    return `Greetings from ${location}!`;
  }

  const greetCity = pipe(capitalize, greet);

  greetCity('kansas city');
  // Greetings from Kansas City!
  // #END:pipeCity

  return greetCity(city);
}

// #START:dogs
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

function getColors(dogs) {
// #START:colors
  const colors = dogs.reduce((colors, dog) => { // <label id="reduce.params" />
    if (colors.includes(dog.color)) { // <label id="reduce.includes"/>
      return colors;
    }
    return [...colors, dog.color]; // <label id="reduce.returnUpdate" />
  }, []); // <label id="reduce.initial" />
  // #END:colors
  return colors;
}

function getAllColors(dogs) {
// #START:allColors
  const colors = dogs.reduce((colors, dog) => {
    return [...colors, dog.color];
  }, []);
  // #END:allColors
  return colors;
}

function separate(dogs) {
// #START:separate
  const filters = dogs.reduce((filters, item) => {
    filters.breed.add(item.breed);
    filters.size.add(item.size);
    filters.color.add(item.color);
    return filters;
  },
  {
    breed: new Set(),
    size: new Set(),
    color: new Set(),
  });
  // #END:separate

  return filters;
}


// #START:developers
const developers = [
  {
    name: 'Jeff',
    language: 'php',
  },
  {
    name: 'Ashley',
    language: 'python',
  },
  {
    name: 'Sara',
    language: 'python',
  },
  {
    name: 'Joe',
    language: 'javascript',
  },
];
// #END:developers

function getSpecialtyCount(developers) {
// #START:specialty
  const aggregated = developers.reduce((specialities, developer) => {
    const count = specialities[developer.language] || 0;
    return {
      ...specialities,
      [developer.language]: count + 1,
    };
  }, {});
  // #END:specialty

  return aggregated;
}

function getExact() {
  // #START:copy
  const callback = function (collectedValues, item) { // <label id="reduce.callback" />
    return [...collectedValues, item];
  };

  const saying = ['veni', 'vedi', 'veci'];
  const initialValue = [];
  const copy = saying.reduce(callback, initialValue); // <label id="reduce.method" />
  // #END:copy
  return copy;
}
export { developers, dogs, getAllColors, getColors, getSpecialtyCount, greetCity, separate };
