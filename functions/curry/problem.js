import { dogs } from './curry';
// START: func
function getDogNames(dogs, filter) {
  const [key, value] = filter;
  return dogs
    .filter(dog => dog[key] === value)
    .map(dog => dog.name);
}

getDogNames(dogs, ['color', 'black']);
// ['max', 'don']
// END: func

export { getDogNames };
