/* eslint-disable no-param-reassign, no-unused-vars */

//  # START:objectActions
function addFilters(filters, key, value) {
  filters[key] = value;
}

function deleteFilters(filters, key) {
  delete filters[key];
}

function clearFilters(filters) {
  filters = {};
  return filters;
}
//  # END:objectActions

export {
  addFilters,
  deleteFilters,
  clearFilters,
};
