/* eslint-disable no-console */
import expect from 'expect';
import { setLatestPost } from './posts';

describe('set latest', () => {
  it('should update post', () => {
    const title = 'Doc Watson Gets the Blues';
    function fakeService() {
      return Promise.resolve({ title });
    }

    const el = {
      innerHTML: '',
    };

    return setLatestPost(el, 1, fakeService)
      .then(() => {
        expect(el.innerHTML).toEqual(title);
      })
      .catch(e => {
        // Getting here is bad.
        console.log(e);
        expect(true).toEqual(false);
      });
  });
});
