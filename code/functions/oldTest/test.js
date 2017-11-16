
// START:final
function formatPrice({ price, location }, user, getTaxInformation) {
  const rate = getTaxInformation(location);
  const taxes = rate ? `plus $${price * rate} in taxes.` : 'plus tax.';
  return `${user} your total is: ${price} ${taxes}`;
}
// END:final

// START:remove
function applyPrice(item, getTaxInformation, domService) {
  const user = domService.get('user');
  const message = formatPrice(item, user, getTaxInformation);
  return domService.set('total', message);
}
// END:remove

export { applyPrice, formatPrice };
