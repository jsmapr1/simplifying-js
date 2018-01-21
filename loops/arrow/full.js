/* eslint-disable prefer-arrow, no-unused-vars, func-names, prefer-arrow-callback */

//  #START:key
function key() {
  return 'abc123';
}
//  #END:key

//  #START:capitalize
function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1);
}
//  #END:capitalize

//  #START:greet
function greet(first, last) {
  return `Hello, ${capitalize(first)} ${capitalize(last)}`;
}
//  #END:greet

//  #START:formatUser
function formatUser(name) {
  return `${capitalize(name)} is logged in.`;
}
//  #END:formatUser

//  #START:applyCustomGreeting
function applyCustomGreeting(name, callback) {
  return callback(capitalize(name));
}
//  #END:applyCustomGreeting

function greetWithExcitement() {
  const greeting =
    //  #START:greetWithExcitement
  applyCustomGreeting('joe', function (name) {
    return `Hi, ${name}!`;
  });
  //  #END:greetWithExcitement
  return greeting;
}

export {
  applyCustomGreeting,
  capitalize,
  formatUser,
  greet,
  greetWithExcitement,
  key,
};
