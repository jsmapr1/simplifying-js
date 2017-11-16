// #START:problem
function getIconPath(icon) {
  const path = icon.path ? icon.path : 'uploads/default.png';
  return `https://assets.foo.com/${path}`;
}
// #END:problem

// #START:and
function getImage(userConfig) {
  const images = userConfig.images;
  const img = images && images.length ? userConfig.images[0] : 'default.png';
  return img;
}
// #END:and

function getImageOneLine(userConfig) {
// #START:one
  const images = userConfig.images;
  const img = images &&
              images.length &&
              images[0].indexOf('gif') < 0
    ? userConfig.images[0] : 'default.png';
  return img;
// #END:one
}

export { getIconPath, getImage, getImageOneLine };
