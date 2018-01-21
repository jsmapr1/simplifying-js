/* eslint-disable no-param-reassign, no-unused-vars */

//  # START:mapActions
const petFilters = new Map();
function addFilters(filters, key, value) {
  filters.set(key, value);
}

function deleteFilters(filters, key) {
  filters.delete(key);
}

function clearFilters(filters) {
  filters.clear();
}
//  # END:mapActions

export {
  addFilters,
  deleteFilters,
  clearFilters,
};
