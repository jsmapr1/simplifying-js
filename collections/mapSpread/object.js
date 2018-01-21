/* eslint-disable no-unused-vars, no-restricted-syntax */

//  # START:objectIterate
const filters = {
  color: 'black',
  breed: 'labrador',
};

function getAppliedFilters(filters) {
  const keys = Object.keys(filters);
  const applied = [];
  for (const key of keys) {
    applied.push(`${key}:${filters[key]}`);
  }
  return `Your filters are: ${applied.join(', ')}.`;
}

// 'Your filters are: color:black, breed:labrador.'
//  # END:objectIterate


//  # START:objectSortIterate
function getSortedAppliedFilters(filters) {
  const keys = Object.keys(filters);
  keys.sort();
  const applied = [];
  for (const key of keys) {
    applied.push(`${key}:${filters[key]}`);
  }
  return `Your filters are: ${applied.join(', ')}.`;
}
// 'Your filters are: breed:labrador, color:black.'
//  # END:objectSortIterate

export {
  getAppliedFilters,
  getSortedAppliedFilters,
};
