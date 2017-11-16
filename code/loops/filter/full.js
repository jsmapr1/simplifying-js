/* eslint-disable no-unused-vars */

// START:team
const team = [
  'Michelle B',
  'Dave L',
  'Dave C',
  'Courtney B',
  'Davina M',
];
// END:team

function getDaveVariants(team) {
// START:filter
  const daves = [];
  for (let i = 0; i < team.length; i++) {
    if (team[i].match(/Da/)) {
      daves.push(team[i]);
    }
  }
  // END:filter
  return daves;
}

// START:instructors
const instructors = [
  {
    name: 'Jim',
    libraries: ['MERIT'],
  },
  {
    name: 'Sarah',
    libraries: ['Memorial', 'SLIS'],
  },
  {
    name: 'Eliot',
    libraries: ['College Library'],
  },
];
// END:instructors

function findMemorialInstructor(instructors) {
// START:findInstructor
  let memorialInstructor;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].libraries.includes('Memorial')) {
      memorialInstructor = instructors[i];
      break;
    }
  }
  // END:findInstructor
  return memorialInstructor;
}

export {
  getDaveVariants,
  findMemorialInstructor,
};
