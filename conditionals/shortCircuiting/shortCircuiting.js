// #START:or
function getIconPath(icon) {
  const path = icon.path || 'uploads/default.png';
  return `https://assets.foo.com/${path}`;
}
// #END:or

// #START:and
function getImage(userConfig) {
  if (userConfig.images && userConfig.images.length > 0) {
    return userConfig.images[0];
  }
  return 'default.png';
}
// #END:and


export { getIconPath, getImage };
