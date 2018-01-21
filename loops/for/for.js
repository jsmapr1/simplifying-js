// START:firms
const firms = new Map()
  .set(10, 'Ivie Group')
  .set(23, 'Soundscaping Source')
  .set(31, 'Big 6');
// END:firms

function checkConflicts(firms, isAvailable) {
  // START:for
  for (const firm of firms) {
    const [id, name] = firm;
    if (!isAvailable(id)) {
      return `${name} is not available`;
    }
  }
  return 'All firms are available';
  // END:for
}

export { firms, checkConflicts };
