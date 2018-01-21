/* eslint-disable no-unused-vars */

//  # START:pure
const defaults = { author: '',
  title: '',
  year: 2017,
  rating: null,
};

const book = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
};

const updated = Object.assign({}, defaults, book);
//  # END:pure

// # START:deep
const defaultEmployee = {
  name: {
    first: '',
    last: '',
  },
  years: 0,
};

const employee = Object.assign({}, defaultEmployee);
// # END:deep

// # START:deepMutate
employee.name.first = 'Joe';

defaultEmployee;

// {
//   name: {
//     first:'Joe',
//     last: '',
//   },
//   years: 0
// }
// # END:deepMutate


// # START:deepMerge
const employee2 = Object.assign(
  {},
  defaultEmployee,
  {
    name: Object.assign({}, defaultEmployee.name),
  },
);
// # END:endMerge

export { defaults };
