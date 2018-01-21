import { capitalize, roundToDecimalPlace } from './util';

function giveTotal(name, total) {
  return `${capitalize(name)}, your total is: ${roundToDecimalPlace(total)}`;
}

giveTotal('sara', 10.3333333);
// "Sara, your total is: 10.33"

export { giveTotal };
