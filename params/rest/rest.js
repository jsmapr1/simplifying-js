/* eslint-disable no-console, no-unused-vars, no-undef */
// START:arguments
function getArguments(...args) {
  return args;
}
getArguments('Bloomsday', 'June 16');
// ['Bloomsday', 'June 16']
// END:arguments

// START:func
function validateCharacterCount(max, ...items) {
  return items.every(item => item.length < max);
}
// END:func

// START:example
validateCharacterCount(10, 'wvoquie');
// true

validateCharacterCount(10, ...['wvoquie']);
// true

const tags = ['Hobbs', 'Eagles'];
validateCharacterCount(10, ...tags);
// true

validateCharacterCount(10, 'Hobbs', 'Eagles');
// true
// END:example

function debug() {
// START:debug
  ['Spirited Away', 'Princess Mononoke'].map((film, ...other) => {
    console.log(other);
    return film.toLowerCase();
  });
  // [0, ['Spirited Away', 'Princess Mononoke']]
  // [1, ['Spirited Away', 'Princess Mononoke']]
// END:debug
}

function shift() {
// START:shift
  const queue = ['stop', 'collaborate', 'listen'];
  const [first, ...remaining] = queue;
  first;
  // 'stop'
  remaining;
  // ['collaborate', 'listen'];
  // END:shift
  return [first, remaining];
}

// START:pass
function applyChanges(...args) {
  updateAccount(...args);
  closeModal();
}
// END:pass

export { getArguments, shift, validateCharacterCount };
