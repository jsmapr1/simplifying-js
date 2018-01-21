import { capitalize } from './util';

function greet(name) {
  return `Hello, ${capitalize(name)}!`;
}

greet('ashley');
// Hello, Ashley!

export { greet };
