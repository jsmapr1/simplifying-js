import expect from 'expect';
import { addBookDefaults, deepMerge, updateBookYear, updateBookTitle } from './objectSpread';

describe('Spread tests', () => {
  it('should update book year', () => {
    const updated = {
      title: 'Reasons and Persons',
      author: 'Derek Parfit',
      year: 1984,
    };

    expect(updateBookYear()).toEqual(updated);
  });

  it('should update book author', () => {
    const updated = {
      title: 'Reasons & Persons',
      author: 'Derek Parfit',
    };
    expect(updateBookTitle()).toEqual(updated);
  });

  it('should add defaults', () => {
    const bookUpdated = addBookDefaults();
    expect(bookUpdated.title).toEqual('ES6 Tips');
    expect(bookUpdated.year).toEqual(2017);
  });

  it('should deep merge', () => {
    const [name1, name2] = deepMerge();
    expect(name1).toNotEqual(name2);
  });
});
