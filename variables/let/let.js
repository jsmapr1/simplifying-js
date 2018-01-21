/* eslint-disable no-var, block-scoped-var, vars-on-top, no-redeclare, func-names, no-loop-func,
no-param-reassign, no-unused-vars, no-var, prefer-const
*/

// # START:salePriceLet
function getLowestPrice(item) {
  let count = item.inventory;
  let price = item.price;

  if (item.salePrice) {
    let count = item.saleInventory;
    if (count > 0) {
      price = item.salePrice;
    }
  }

  if (count) {
    return price;
  }

  return 0;
}
// # END:salePriceLet

// # START:scopeLet
function addClickLet(items) {
  for (let i = 0; i < items.length; i++) { // <label id="scope.let"/>
    items[i].onClick = function () { return i; };
  }
  return items;
}
const exampleLet = [{}, {}];
const clickSetLet = addClickLet(exampleLet);
clickSetLet[0].onClick();
// # END:scopeLet

export {
  getLowestPrice,
};
