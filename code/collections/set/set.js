// #START:unique
function getUnique(attributes) {
  return [...new Set(attributes)];
}
// #END:unique

// #START:uniqueColors
function getUniqueColors(dogs) {
  const unique = new Set();
  for (const dog of dogs) {
    unique.add(dog.color);
  }
  return [...unique];
}
// #END:uniqueColors

function getUniqueColorsReduce(dogs) {
  const colors =
// #START:uniqueReduce
[...dogs.reduce((colors, { color }) => colors.add(color), new Set())];
  // #END:uniqueReduce
  return colors;
}

export { getUnique, getUniqueColors, getUniqueColorsReduce };
