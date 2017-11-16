// START:greet
function greet(name) {
  return `Hi, ${name}`;
}
greet('Leo');
'Hi, Leo';
// END:greet

// START:yell
function yell(name) {
  return `HI, ${name.toUpperCase()}!`;
}
greet('Pankaj');
'HI, PANKAJ!';
// END:yell

// START:convert
function leapYearConverter(age) {
  return `You'd be ${Math.floor(age / 4)} if born on a leap year.`;
}
leapYearConverter(34);
// "You'd be 8 if born on a leap year."
// END:convert

function getProvider() {
  // stub for get provider
  return 'pragprog.com/cloud';
}

// START:func
function generateLink(image, width) {
  return `https://${getProvider()}/${image}?width=${parseInt(width, 10)}`;
}
// END:func

export { generateLink, greet, leapYearConverter, yell };
