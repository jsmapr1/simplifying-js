import expect from 'expect';
import {
  getDaveVariants,
  findMemorialInstructor,
  findAnyInstructor,
  getPassingScores,
  getPerfectScores,
  instructors,
  scores,
  team,
} from './filter';
import {
  getDaveVariants as getDaveVariantsFull,
  findMemorialInstructor as findMemorialInstructorFull,
} from './full';

describe('filters', () => {
  it('should get the daves', () => {
    expect(getDaveVariants(team).length).toEqual(3);
  });

  it('should find a single instructor', () => {
    expect(findMemorialInstructor(instructors).name).toEqual('Sarah');
  });

  it('should get the daves', () => {
    expect(getDaveVariantsFull(team).length).toEqual(3);
  });

  it('should find a single instructor', () => {
    expect(findMemorialInstructorFull(instructors).name).toEqual('Sarah');
  });

  it('should get passing scores', () => {
    expect(getPassingScores(scores)).toEqual(2);
  });

  it('should get perfect scores', () => {
    expect(getPerfectScores(scores)).toEqual(0);
  });

  it('should use a curry functions', () => {
    expect(findAnyInstructor(instructors).name).toEqual('Jim');
  });
});
