function checkConflicts(firms, isAvailable) {
  // START:loop
  const entries = [...firms];
  for (let i = 0; i < entries.length; i++) {
    const [id, name] = entries[i];
    if (!isAvailable(id)) {
      return `${name} is not available`;
    }
  }
  return 'All firms are available';
  // END:loop
}

export { checkConflicts };
