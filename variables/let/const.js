// # START:salePriceConst
function getLowestPrice(item) {
  const count = item.inventory;
  let price = item.price;

  if (item.salePrice) {
    const saleCount = item.saleInventory;
    if (saleCount > 0) {
      price = item.salePrice;
    }
  }

  if (count) {
    return price;
  }

  return 0;
}
// # END:salePriceConst

export { getLowestPrice };
