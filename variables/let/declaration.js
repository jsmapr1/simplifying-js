/* eslint-disable no-redeclare */
// START:declaration
function getLowestPriceDeclaration(item) {
  const count = item.inventory;
  let price = item.price;

  if (!count) {
    return 0;
  }

  // ...

  let price = item.saleInventory ? item.salePrice : item.wholesalePrice;

  return price;
}
// END:declaration

export default getLowestPriceDeclaration;
