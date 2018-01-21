import { roundToDecimalPlace } from './problem';

// START:convert
function convertWeight(weight, ounces = 0, roundTo = 2) {
  const total = weight + (ounces / 16);
  const conversion = total / 2.2;

  return roundToDecimalPlace(conversion, roundTo);
}
// END:convert

// START:with
convertWeight(4, 0, 2);
// END:with

// START:without
convertWeight(4, undefined, 2);
// END:without
export { convertWeight };
