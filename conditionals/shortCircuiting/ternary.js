// #START:problem
function getIconPath(icon) {
  const path = icon.path ? icon.path : 'uploads/default.png';
  return `https://assets.foo.com/${path}`;
}
// #END:problem

// #START:and
function getImage(userConfig) {
  const images = userConfig.images;
  return images && images.length ? images[0] : 'default.png';
}
// #END:and

function getImageOneLine(userConfig) {
// #START:one
  const images = userConfig.images;
  return images &&
              images.length &&
              images[0].indexOf('gif') < 0
    ? images[0] : 'default.png';
// #END:one
}

export { getIconPath, getImage, getImageOneLine };
