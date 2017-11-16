// START:apply
function applyDefaults(map, defaults) {
  return new Map([...defaults, ...map]);
}
// END:apply

export { applyDefaults };
