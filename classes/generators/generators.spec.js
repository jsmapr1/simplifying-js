import expect from 'expect';
import { getCairoTrilogy } from './simple';
import FamilyTree from './generators';
import FamilyTreeProblem from './problem';

describe('Cairo trilogy', () => {
  it('returns each book of the Cairo trilogy', () => {
    const trilogy = getCairoTrilogy();
    expect(trilogy.next().value).toEqual('Palace Walk');
    expect(trilogy.next().value).toEqual('Palace of Desire');
    expect(trilogy.next().value).toEqual('Sugar Street');
    expect(trilogy.next().done).toEqual(true);
  });

  it('will spread the trilogy into an array', () => {
    const trilogy = [...getCairoTrilogy()];
    expect(trilogy).toEqual([
      'Palace Walk',
      'Palace of Desire',
      'Sugar Street',
    ]);
  });

  it('will add books to a reading list', () => {
    const readingList = {
      'Visit from the Goon Squad': true,
      'Manhattan Beach': false,
    };
    for (const book of getCairoTrilogy()) {
      readingList[book] = false;
    }
    expect(readingList).toEqual({
      'Visit from the Goon Squad': true,
      'Manhattan Beach': false,
      'Palace Walk': false,
      'Palace of Desire': false,
      'Sugar Street': false,
    });
  });
});
describe('should create an array of family members', () => {
  it('should get a list of family members with a method', () => {
    const family = new FamilyTreeProblem();
    expect(family.getMembers()).toEqual(['Doris', 'Martha', 'Dyan', 'Bea']);
  });
  it('should get a list of family members', () => {
    const family = new FamilyTree();
    expect([...family]).toEqual(['Doris', 'Martha', 'Dyan', 'Bea']);
  });
});
