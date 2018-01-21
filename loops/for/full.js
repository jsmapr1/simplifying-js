function checkConflicts(firms, isAvailable) {
  // START:reduce
  const message = [...firms].reduce((availability, firm) => {
    const [id, name] = firm;
    if (!isAvailable(id)) {
      return `${name} is not available`;
    }
    return availability;
  }, 'All firms are available');
  return message;
  // END:reduce
}

function findConflicts(firms, isAvailable) {
  // START:find
  const unavailable = [...firms].find(firm => {
    const [id] = firm;
    return !isAvailable(id);
  });

  if (unavailable) {
    return `${unavailable[1]} is not available`;
  }

  return 'All firms are available';
  // END:find
}

function isValid(registration) {
  const message = Object.keys(registration).reduce((valid, field) => {
    if (!registration[field]) {
      return `You are missing ${field}`;
    }
    return valid;
  }, '');
  return message || 'Thank You';
}

export { checkConflicts, findConflicts, isValid };
