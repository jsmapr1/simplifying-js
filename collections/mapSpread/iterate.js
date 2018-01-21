/* eslint-disable no-console, no-unused-vars, no-restricted-syntax */

// START:iterate
const filters = new Map()
  .set('color', 'black')
  .set('breed', 'labrador');

function checkFilters(filters) {
  for (const entry of filters) {
    console.log(entry);
  }
}
// ['color', 'black']
// ['breed', 'labrador']
// END:iterate

// START:iterateGet
function getAppliedFilters(filters) {
  const applied = [];
  for (const [key, value] of filters) {
    applied.push(`${key}:${value}`);
  }
  return `Your filters are: ${applied.join(', ')}.`;
}

// 'Your filters are: color:black, breed:labrador.'
// END:iterateGet

// START:iterateSort
function sortByKey(a, b) {
  return a[0] > b[0] ? 1 : -1;
}

function getSortedAppliedFilters(filters) {
  const applied = [];
  for (const [key, value] of [...filters].sort(sortByKey)) {
    applied.push(`${key}:${value}`);
  }
  return `Your filters are: ${applied.join(', ')}.`;
}
// 'Your filters are: breed:labrador, color:black.'
// END:iterateSort

export { getAppliedFilters, getSortedAppliedFilters };
