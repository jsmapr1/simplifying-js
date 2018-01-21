import * as utils from './util';

function greet(name) {
  return `Hello, ${utils.capitalize(name)}!`;
}

greet('ashley');
// Hello, Ashley!

export { greet };
