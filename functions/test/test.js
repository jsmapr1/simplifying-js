
// START:final
function formatPrice(user, { price, location }, getTaxInformation) {
  const rate = getTaxInformation(location);
  const taxes = rate ? `plus $${price * rate} in taxes.` : 'plus tax.';
  return `${user} your total is: ${price} ${taxes}`;
}
// END:final

export { formatPrice };
