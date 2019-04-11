/* eslint-disable no-unused-vars */
//  # START:removeItemSplice
function removeItem(items, removable) {
  if (items.includes(removable)) {
    const index = items.indexOf(removable);
    items.splice(index, 1);
  }
  return items;
}
//  # END:removeItemSplice

//  # START:removeItemSpliceExample
const books = ['practical vim', 'moby dick', 'the dark tower'];
const recent = removeItem(books, 'moby dick');
const novels = removeItem(books, 'practical vim');
//  # END:removeItemSpliceExample

export { removeItem };
