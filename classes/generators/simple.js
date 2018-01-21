// START: next
function* getCairoTrilogy() {
  yield 'Palace Walk';
  yield 'Palace of Desire';
  yield 'Sugar Street';
}

const trilogy = getCairoTrilogy();
trilogy.next();
// { value: 'Palace Walk', done: false }
trilogy.next();
// { value: 'Palace of Desire', done: false }
trilogy.next();
// { value: 'Sugar Street', done: false }
trilogy.next();
// { value: undefined, done: true }
// END: next

// START: spread
[...getCairoTrilogy];
// [ 'Palace Walk', 'Palace of Desire', 'Sugar Street']
// END: spread

// START: loop
const readingList = {
  'Visit from the Goon Squad': true,
  'Manhattan Beach': false,
};
for (const book of getCairoTrilogy()) {
  readingList[book] = false;
}
readingList;
// {
//   'Visit from the Goon Squad': true,
//   'Manhattan Beach': false,
//   'Palace Walk': false,
//   'Palace of Desire': false,
//   'Sugar Street': false
// }

// END: loop

export { getCairoTrilogy };
