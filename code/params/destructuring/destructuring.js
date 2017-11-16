// START:landscape
const landscape = {
  title: 'Landscape',
  photographer: 'Nathan',
  equipment: 'Canon',
  format: 'digital',
  src: '/landscape-nm.jpg',
  location: [32.7122222, -103.1405556],
};
// END:landscape

const anonymous = {
  title: 'Kids',
  equipment: 'Nikon',
  src: '/garden.jpg',
  location: [38.9675338, -95.2614205],
};

// START:func
function displayPhoto({
  title,
  photographer = 'Anonymous',
  location: [latitude, longitude],
  src: url,
  ...other
}) {
  const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);
  return (`
    <img alt="Photo of ${title} by ${photographer}" src="${url}" />
    <div>${title}</div>
    <div>${photographer}</div>
    <div>Latitude: ${latitude} </div>
    <div>Longitude: ${longitude} </div>
    <div>${additional.join(' <br/> ')}</div>
  `);
}
// END:func

export { anonymous, displayPhoto, landscape };
