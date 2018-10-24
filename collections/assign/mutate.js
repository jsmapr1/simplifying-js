
const book = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
};

const defaults = {
  author: '',
  title: '',
  year: 2017,
  rating: null,
};

//  # START:mutate
Object.assign(defaults, book);

// {
//   author: 'Joe Morgan',
//   title: 'Simplifying JavaScript',
//   year: 2017,
//   rating: null,
// }
//  # END:mutate

//  # START:mutate2
const anotherBook = {
  title: 'Another book',
  year: 2016,
};

Object.assign(defaults, anotherBook);

// {
//   author: 'Joe Morgan',
//   title: 'Another book',
//   year: 2016,
//   rating: null,
// }
//  # END:mutate2
