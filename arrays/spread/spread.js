/* eslint-disable no-unused-vars */

//  # START:removeItemSpread
function removeItem(items, removable) {
  if (items.includes(removable)) {
    const index = items.indexOf(removable);
    return [...items.slice(0, index), ...items.slice(index + 1)];
  }
  return items;
}
//  # END:removeItemSpread


//  # START:spreadArguments
const book = ['Reasons and Persons', 'Derek Parfit', 19.99];

function formatBook(title, author, price) {
  return `${title} by ${author} $${price}`;
}
//  # END:spreadArguments


//  # START:spreadArgumentsExample
formatBook(book[0], book[1], book[2]);

//  # END:spreadArgumentsExample

//  # START:spreadArgumentsExample2
formatBook(...book);
//  # END:spreadArgumentsExample2

export {
  book,
  formatBook,
  removeItem,
};
