import expect from 'expect';
import { greet } from './name';

describe('name', () => {
  it('should capitalize name', () => {
    expect(greet('ashley')).toEqual('Hello, Ashley!');
  });
});
