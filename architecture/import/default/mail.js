import normalize from './address';

function getAddress(user) {
  return normalize(user.address);
}

export default getAddress;
