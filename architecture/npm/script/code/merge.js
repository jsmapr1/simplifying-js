/* eslint-disable import/no-duplicates */
import lodash from 'lodash';
import { fromPairs } from 'lodash';

export function mapToObject(map) {
  return fromPairs([...map]);
}

export function objectToMap(object) {
  const pairs = lodash.toPairs(object);
  return new Map(pairs);
}
