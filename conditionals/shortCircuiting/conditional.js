/* eslint-disable no-unused-vars */

// #START:problem
function getFirstImage(userConfig) {
  let img = 'default.png';
  if (userConfig.images) {
    img = userConfig.images[0];
  }
  return img;
}
// #END:problem

// #START:problem2
function getImage(userConfig) {
  let img = 'default.png';
  if (userConfig.images) {
    if (userConfig.images.length) {
      img = userConfig.images[0];
    }
  }
  return img;
}
// #END:problem2

export { getImage };
