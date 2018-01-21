//  #START:key
const key = () => {
  return 'abc123';
};
//  #END:key

//  #START:capitalize
const capitalize = name => {
  return name[0].toUpperCase() + name.slice(1);
};
//  #END:capitalize

//  #START:greet
const greet = (first, last) => {
  return `Hello, ${capitalize(first)} ${capitalize(last)}`;
};
//  #END:greet

//  #START:formatUser
const formatUser = name => `${capitalize(name)} is logged in.`;
//  #END:formatUser

function applyCustomGreeting(name, callback) {
  return callback(capitalize(name));
}

function greetWithExcitement() {
  const greeting =
    //  #START:greetWithExcitement
  applyCustomGreeting('joe', name => `Hi, ${name}!`);
  //  #END:greetWithExcitement
  return greeting;
}

export { key, capitalize, greet, formatUser, greetWithExcitement };
