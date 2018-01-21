/* eslint-disable array-callback-return, consistent-return */
function getColors(dogs) {
// #START:colors
  const colors = dogs.reduce((colors, dog) => {
    if (colors.includes(dog.color)) {
      return colors;
    }
    [...colors, dog.color]; // <label id="reduce.mistake" />
  }, []);
  // #END:colors
  return colors;
}

export { getColors };
