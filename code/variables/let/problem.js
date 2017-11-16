/* eslint-disable no-var, block-scoped-var, vars-on-top, no-redeclare, func-names, no-loop-func,
no-param-reassign, no-unused-vars, no-var, prefer-const
*/
// # START:salePrice
function getLowestPrice(item) {
  var count = item.inventory; // <label id="sale.count1"/>
  var price = item.price;

  if (item.salePrice) {
    var count = item.saleInventory; // <label id="sale.count2"/>
    if (count > 0) {
      price = item.salePrice;
    }
  }

  if (count) { // <label id="sale.if2"/>
    return price;
  }

  return 0;
}
// # END:salePrice

export { getLowestPrice };
