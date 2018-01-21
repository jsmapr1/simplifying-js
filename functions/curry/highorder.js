/* eslint-disable */

// START:program
const setStrongHallProgram = program => {
  const defaults = {
    hours: '8 a.m. - 8 p.m.',
    address: 'Jayhawk Blvd',
    name: 'Augusto',
    phone: '555-555-5555'
  }
  return { ...defaults, ...program}
}

const programs = setStrongHallProgram(program);

const exhibit = setStrongHallProgram(exhibit);
// END:program
