/* eslint-disable no-empty */
// START:func
function validateCharacterCount(max, items) {
  return items.every(item => item.length < max);
}
// END:func

// START:example
validateCharacterCount(10, ['Hobbs', 'Eagles']);
// true
// END:example

try {
// START:typeerror
  validateCharacterCount(10, 'wvoquine');
// TypeError: items.every is not a function
// END:typeerror
} catch (e) {

}
export { validateCharacterCount };
