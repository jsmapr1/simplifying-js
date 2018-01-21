/* eslint-disable no-unused-vars */

// START:info
const building = {
  hours: '8 a.m. - 8 p.m.',
  address: 'Jayhawk Blvd',
};

const manager = {
  name: 'Augusto',
  phone: '555-555-5555',
};

const program = {
  name: 'Presenting Research',
  room: '415',
  hours: '3 - 6',
};

const exhibit = {
  name: 'Emerging Scholarship',
  contact: 'Dyan',
};
// END:info

// START:func
function mergeProgramInformation(building, manager) {
  const { hours, address } = building;
  const { name, phone } = manager;
  const defaults = {
    hours,
    address,
    contact: name,
    phone,
  };

  return program => {
    return { ...defaults, ...program };
  };
}
// END:func

// START:invoke
const programInfo = mergeProgramInformation(building, manager)(program);
// {
//    name: 'Presenting Research',
//    room: '415',
//    hours: '3 - 6',
//    address: 'Jayhawk Blvd',
//    contact: 'Augusto',
//    phone: '555-555-5555'
//  }

const exhibitInfo = mergeProgramInformation(building, manager)(exhibit);
// {
//    name: 'Emerging Scholarship',
//    contact: 'Dyan'
//    hours: '8 a.m. - 8 p.m.',
//    address: 'Jayhawk Blvd'
//    phone: '555-555-5555'
//  }
// END:invoke

function getBirds(...states) {
  return ['meadowlark', 'robin', 'roadrunner'];
}
// START:birds
const birds = getBirds('kansas', 'wisconsin', 'new mexico');
// ['meadowlark', 'robin', 'roadrunner']
// END:birds

// START:zip
const zip = (...left) => (...right) => {
  return left.map((item, i) => [item, right[i]]);
};
zip('kansas', 'wisconsin', 'new mexico')(...birds);
// [
//   ['kansas', 'meadowlark'],
//   ['wisconsin', 'robin'],
//   ['new mexico', 'roadrunner']
// ]
// END:zip

export { building, manager, exhibit, program, zip, mergeProgramInformation };
