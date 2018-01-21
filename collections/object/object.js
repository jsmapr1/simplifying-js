/* eslint-disable no-undef, no-unused-vars */

//  # START:book
const book = {
  title: 'ES6 Tips',
  author: 'Joe Morgan',
  date: 2017,
};
//  # END:book

//  # START:config
export const config = {
  endpoint: 'http://pragprog.com',
  key: 'secretkey',
};
//  # END:config

//  # START:between
function getBill(item) {
  return {
    name: item.name,
    due: twoWeeksFromNow(),
    total: calculateTotal(item.price),
  };
}

const bill = getBill({ name: 'Room Cleaning', price: 30 });

function displayBill(bill) {
  return `Your total ${bill.total} for ${bill.name} is due on ${bill.due}`;
}
//  # END:between
