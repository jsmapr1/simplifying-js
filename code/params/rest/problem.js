/* eslint-disable prefer-rest-params */
// START:arguments
function getArguments() {
  return arguments;
}
getArguments('Bloomsday', 'June 16');
// { '0': 'Bloomsday', '1': 'June 16' }
// END:arguments

// START:func
function validateCharacterCount(max) {
  const items = Array.prototype.slice.call(arguments, 1); // <label id="rest.arguments" />
  return items.every(item => item.length < max);
}
// END:func

// START:example
validateCharacterCount(10, 'wvoquie');
// true

const tags = ['Hobbs', 'Eagles'];
validateCharacterCount(10, ...tags);
// true
// END:example

export { getArguments, validateCharacterCount };
