/* eslint-disable no-unused-vars */

const team = [
  'Michelle B',
  'Dave L',
  'Dave C',
  'Courtney B',
  'Davina M',
];

function getDaveVariants(team) {
// START:filter
  const daves = team.filter(member => member.match(/Da/));
  // END:filter
  return daves;
}

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

function findMemorialInstructor(instructors) {
// START:findInstructor
  const librarian = instructors.find(instructor => {
    return instructor.libraries.includes('Memorial');
  });
  // END:findInstructor

  return librarian;
}

function findAnyInstructor(instructors) {
// START:findInstructorCurry
  const findByLibrary = library => instructor => {
    return instructor.libraries.includes(library);
  };
  const librarian = instructors.find(findByLibrary('MERIT'));

  // {
  //   name: 'Jim',
  //   libraries: ['MERIT'],
  // }
  // END:findInstructorCurry

  return librarian;
}

// START:score
const scores = [30, 82, 70, 45];
function getPassingScores(scores) {
  const passing = scores.filter(score => score > 59);
  // [70, 82]
  return passing.length;
}
// 2

// END:score

// START:perfect
function getPerfectScores(scores) {
  const perfect = scores.filter(score => score === 100);
  // []
  return perfect.length;
}
// 0

// END:perfect

export {
  scores,
  getDaveVariants,
  findAnyInstructor,
  findMemorialInstructor,
  getPassingScores,
  getPerfectScores,
  instructors,
  team,
};
