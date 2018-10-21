import expect from 'expect';
import { removeItem as removeItemProblem } from './problem';
import { removeItem as removeItemSlice } from './slice';
import { removeItem as removeItemSplice } from './splice';
import { book, formatBook, removeItem } from './spread';

describe('spread operator', () => {
  it('should remove an item with a loop', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'orange'];
    expect(removeItemProblem(before, 'banana')).toEqual(after);
  });

  it('should remove an item with slice', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'orange'];
    expect(removeItemSlice(before, 'banana')).toEqual(after);
  });

  it('should remove an item with splice', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'orange'];
    expect(removeItemSplice(before, 'banana')).toEqual(after);
  });

  it('should remove the first item with a loop', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['banana', 'orange'];
    expect(removeItemProblem(before, 'apple')).toEqual(after);
  });

  it('should remove the first item with slice', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['banana', 'orange'];
    expect(removeItemSlice(before, 'apple')).toEqual(after);
  });

  it('should remove the first item with spread', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['banana', 'orange'];
    expect(removeItem(before, 'apple')).toEqual(after);
  });

  it('should splice multiple times', () => {
    const books = ['practical vim', 'moby dick', 'the dark tower'];
    removeItemSplice(books, 'moby dick');
    const novels = removeItemSplice(books, 'practical vim');
    expect(novels).toEqual(['the dark tower']);
  });

  it('should format price with spread', () => {
    const values = Object.values(book);
    expect(formatBook(...values)).toEqual('Reasons and Persons by Derek Parfit $19.99');
    expect(formatBook(...Object.values(book))).toEqual('Reasons and Persons by Derek Parfit $19.99');
  });

  it('should not modify with a loop', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItemProblem(before, 'peach')).toEqual(after);
  });

  it('should not modify with a slice', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItemSlice(before, 'peach')).toEqual(after);
  });

  it('should not modify with a splice', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItemSplice(before, 'peach')).toEqual(after);
  });

  it('should not modify with a spread', () => {
    const before = ['apple', 'banana', 'orange'];
    const after = ['apple', 'banana', 'orange'];
    expect(removeItem(before, 'peach')).toEqual(after);
  });
});
