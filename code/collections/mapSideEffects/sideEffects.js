/* eslint-disable no-restricted-syntax, no-unused-vars */

//  # START:maps
const defaults = new Map()
  .set('color', 'brown')
  .set('breed', 'beagle')
  .set('state', 'kansas');


const filters = new Map()
  .set('color', 'black');

//  # END:maps

//  # START:apply
function applyDefaults(map, defaults) {
  for (const [key, value] of defaults) {
    if (!map.has(key)) {
      map.set(key, value);
    }
  }
}
//  # START:apply

export { applyDefaults };
