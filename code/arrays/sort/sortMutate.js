//  # START:staff
const staff = [
  {
    name: 'Joe',
    years: 10,
  },
  {
    name: 'Theo',
    years: 5,
  },
  {
    name: 'Dyan',
    years: 10,
  },
];
//  # END:staff

//  # START:sortFunctions
function sortByYears(a, b) {
  if (a.years === b.years) {
    return 0;
  }
  return a.years - b.years;
}

const sortByName = (a, b) => {
  if (a.name === b.name) {
    return 0;
  }
  return a.name > b.name ? 1 : -1;
};
//  # END:sortFunctions

//  # START:sortYears
staff.sort(sortByYears);

// [
//   {
//     name: 'Theo',
//     years: 5
//   },
//   {
//     name: 'Joe',
//     years: 10
//   },
//   {
//     name: 'Dyan',
//     years: 10
//   },
// ];
//  # END:sortYears

//  # START:sortName
staff.sort(sortByName);

// [
//   {
//     name: 'Dyan',
//     years: 10
//   },
//   {
//     name: 'Joe',
//     years: 10
//   },
//   {
//     name: 'Theo',
//     years: 5
//   },
// ];
//  # END:sortName

//  # START:sortYearsAgain
staff.sort(sortByYears);

// [
//   {
//     name: 'Theo',
//     years: 5
//   },
//   {
//     name: 'Dyan',
//     years: 10
//   },
//   {
//     name: 'Joe',
//     years: 10
//   },
// ]
//  # END:sortYearsAgain
