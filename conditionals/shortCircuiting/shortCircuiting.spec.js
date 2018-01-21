import expect from 'expect';
import { getIconPath, getImage } from './shortCircuiting';
import { getIconPath as getPathTernary, getImage as getIconTernary, getImageOneLine } from './ternary';
import { getImage as getConditional } from './conditional';

describe('short ternary or', () => {
  it('should take first value if available', () => {
    const image = {
      path: 'foo/bar.png',
    };
    const url = 'https://assets.foo.com/foo/bar.png';

    expect(getPathTernary(image)).toEqual(url);
  });

  it('should take second value if not available', () => {
    const image = {
    };
    const url = 'https://assets.foo.com/uploads/default.png';
    expect(getPathTernary(image)).toEqual(url);
  });
});

describe('ternary &&', () => {
  it('it will stop if the first condition is not met', () => {
    const userConfig = {
    };
    const image = 'default.png';

    expect(getIconTernary(userConfig)).toEqual(image);
  });

  it('it proceeds if the second condition is not met', () => {
    const userConfig = {
      images: [
        'foo.png',
      ],
    };
    const image = 'foo.png';

    expect(getIconTernary(userConfig)).toEqual(image);
  });
});

describe('short circuiting ||', () => {
  it('should take first value if available', () => {
    const image = {
      path: 'foo/bar.png',
    };
    const url = 'https://assets.foo.com/foo/bar.png';

    expect(getIconPath(image)).toEqual(url);
  });

  it('should take second value if first is not available', () => {
    const image = {
    };
    const url = 'https://assets.foo.com/uploads/default.png';
    expect(getIconPath(image)).toEqual(url);
  });
});

describe('short circuiting &&', () => {
  it('it will stop if the first condition is not met', () => {
    const userConfig = {
    };
    const image = 'default.png';

    expect(getImage(userConfig)).toEqual(image);
  });

  it('it proceeds if the second condition is not met', () => {
    const userConfig = {
      images: [
        'foo.png',
      ],
    };
    const image = 'foo.png';

    expect(getImage(userConfig)).toEqual(image);
  });
});

describe('conditional &&', () => {
  it('it will stop if the first condition is not met', () => {
    const userConfig = {
    };
    const image = 'default.png';

    expect(getConditional(userConfig)).toEqual(image);
  });

  it('it proceeds if the second condition is not met', () => {
    const userConfig = {
      images: [
        'foo.png',
      ],
    };
    const image = 'foo.png';

    expect(getConditional(userConfig)).toEqual(image);
  });
});

describe('one line image', () => {
  it('it will stop if the first condition is not met', () => {
    const userConfig = {
    };
    const image = 'default.png';

    expect(getImageOneLine(userConfig)).toEqual(image);
  });

  it('it will stop if the second condition is not met', () => {
    const userConfig = {
      images: [],
    };
    const image = 'default.png';

    expect(getImageOneLine(userConfig)).toEqual(image);
  });

  it('it will stop if the third condition is not met', () => {
    const userConfig = {
      images: ['logo.gif'],
    };
    const image = 'default.png';

    expect(getImageOneLine(userConfig)).toEqual(image);
  });

  it('it will use the image if everything passes', () => {
    const userConfig = {
      images: ['logo.png'],
    };

    expect(getImageOneLine(userConfig)).toEqual('logo.png');
  });
});
