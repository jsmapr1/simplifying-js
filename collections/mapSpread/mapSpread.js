/* eslint-disable no-unused-vars */

const filters = new Map()
  .set('color', 'black')
  .set('breed', 'labrador');

// START:get
function getAppliedFilters(filters) {
  const applied = [...filters].map(([key, value]) => {
    return `${key}:${value}`;
  });
  return `Your filters are: ${applied.join(', ')}.`;
}

// 'Your filters are: color:black, breed:labrador.'
// END:get

function sortByKey(a, b) {
  return a[0] > b[0] ? 1 : -1;
}

// START:sort
function getSortedAppliedFilters(filters) {
  const applied = [...filters]
    .sort(sortByKey)
    .map(([key, value]) => {
      return `${key}:${value}`;
    })
    .join(', ');

  return `Your filters are: ${applied}.`;
}
// 'Your filters are: breed:labrador, color:black.'
// END:sort

export { getAppliedFilters, getSortedAppliedFilters };
