/* eslint-disable no-unused-vars, prefer-const */

function noChange() {
  // START:nochange
  const names = ['walter', 'white'];
  const capitalized = names.forEach(name => name.toUpperCase());

  capitalized;
  // undefined
  // END:nochange
  return capitalized;
}

function mutateChange() {
  // START:mutate
  const names = ['walter', 'white'];
  let capitalized = [];
  names.forEach(name => capitalized.push(name.toUpperCase()));

  capitalized;
  // ['WALTER', 'WHITE'];
  // END:mutate

  return capitalized;
}

// START:sailors
const sailingClub = [
  'yi hong',
  'andy',
  'darcy',
  'jessi',
  'alex',
  'nathan',
];
// END:sailors

function sendInvitation(sailingClub, sendEmail) {
  // START:email
  sailingClub.forEach(member => sendEmail(member));
  // END:email
}

export { mutateChange, noChange, sailingClub, sendInvitation };
