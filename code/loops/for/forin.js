/* eslint-disable quote-props */

// START:firms
const firms = {
  '10': 'Ivie Group',
  '23': 'Soundscape',
  '31': 'Big 6',
};
// END:firms

function checkConflicts(firms, isAvailable) {
  // START:for
  for (const id in firms) {
    if (!isAvailable(parseInt(id, 10))) {
      return `${firms[id]} is not available`;
    }
  }
  return 'All firms are available';
  // END:for
}

export { firms, checkConflicts };
