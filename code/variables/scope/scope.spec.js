import expect from 'expect';

import { addClick } from './problem';
import { addClick as addClickCurry } from './curry';
import { addClick as addClickLet } from './scope';

describe('let scope', () => {
  it('should have a scope problem', () => {
    const items = [
      {},
      {},
    ];
    addClick(items);
    expect(items[0].onClick()).toEqual(2);
    expect(items[1].onClick()).toEqual(2);
  });

  it('should not have a  problem', () => {
    const items = [
      {},
      {},
    ];
    addClickCurry(items);
    expect(items[0].onClick()).toEqual(0);
    expect(items[1].onClick()).toEqual(1);
  });

  it('should not have a  problem', () => {
    const items = [
      {},
      {},
    ];
    addClickLet(items);
    expect(items[0].onClick()).toEqual(0);
    expect(items[1].onClick()).toEqual(1);
  });
});
