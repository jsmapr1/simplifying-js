/* eslint-disable  prefer-template */
function getProvider() {
  // stub for get provider
  return 'pragprog.com/cloud';
}

// START:func
function generateLink(image, width) {
  const widthInt = parseInt(width, 10);
  return 'https://' + getProvider() + '/' + image + '?width=' + widthInt;
}
// END:func

export { generateLink };
