/* eslint-disable no-unused-vars */

function updateBookYear() {
//  # START:year
  const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit',
  };

  const update = { ...book, year: 1984 };

  // { title: 'Reasons and Persons', author: 'Derek Parfit', year: 1984}
  //  # END:year
  return update;
}

function updateBookTitle() {
//  # START:title
  const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit',
  };

  const update = { ...book, title: 'Reasons & Persons' };

  // { title: 'Reasons & Persons', author: 'Derek Parfit' }
  //  # END:title
  return update;
}

function addBookDefaults() {
  //  # START:add
  const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null,
  };

  const book = {
    author: 'Joe Morgan',
    title: 'ES6 Tips',
  };


  const bookWithDefaults = { ...defaults, ...book };

  // {
  //   author: 'Joe Morgan',
  //   title: 'ES6 Tips',
  //   year: 2017,
  //   rating: null,
  // }
  //  # END:add

  return bookWithDefaults;
}

function deepMerge() {
  const defaultEmployee = {
    name: {
      first: '',
      last: '',
    },
    years: 0,
  };
  // # START:deepMerge
  const employee = {
    ...defaultEmployee,
    name: {
      ...defaultEmployee.name,
    },
  };
  // # END:deepMerge

  employee.name.first = 'joe';
  return [defaultEmployee.name.first, employee.name.first];
}
export { addBookDefaults, deepMerge, updateBookTitle, updateBookYear };
