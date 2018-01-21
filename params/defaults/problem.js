function roundToDecimalPlace(number, decimalPlaces) {
  const round = 10 ** decimalPlaces;
  return Math.round(number * round) / round;
}

// START:convert
function convertWeight(weight, ounces, roundTo) {
  const oz = ounces / 16 || 0;
  const total = weight + oz;
  const conversion = total / 2.2;

  const round = roundTo === undefined ? 2 : roundTo;

  return roundToDecimalPlace(conversion, round);
}
// END:convert

export { convertWeight, roundToDecimalPlace };
