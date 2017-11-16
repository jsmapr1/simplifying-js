import expect from 'expect';

import { generateLink as generateConcat } from './problem';
import { generateLink, greet, leapYearConverter, yell } from './literals';

describe('generate link', () => {
  const link = 'https://pragprog.com/cloud/foo?width=200';
  const image = 'foo';
  const width = 200.5;
  it('should generate a link with concatenation', () => {
    expect(generateConcat(image, width)).toEqual(link);
  });

  it('should generate a link with literals', () => {
    expect(generateLink(image, width)).toEqual(link);
  });
});

describe('template demos', () => {
  it('should convert a variable', () => {
    const result = 'Hi, Leo';
    expect(greet('Leo')).toEqual(result);
  });

  it('should convert a variable with a method', () => {
    const result = 'HI, PANKAJ!';
    expect(yell('Pankaj')).toEqual(result);
  });

  it('should convert a template with functions', () => {
    const result = "You'd be 8 if born on a leap year.";
    expect(leapYearConverter(34)).toEqual(result);
  });
});
