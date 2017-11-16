function getAllColors(dogs) {
  // #START:allColors
  const colors = dogs.map(dog => dog.color);
  // #END:allColors
  return colors;
}

export { getAllColors };
