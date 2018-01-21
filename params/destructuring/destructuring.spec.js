import expect from 'expect';

import {
  displayPhoto as displayProblem,
} from './problem';

import {
  displayPhoto as displayAlt,
} from './alternate';

import {
  anonymous,
  displayPhoto,
  landscape,
} from './destructuring';

describe('format photographer', () => {
  const photoMarkup = `
    <img alt="Photo of Landscape by Nathan" src="/landscape-nm.jpg" />
    <div>Landscape</div>
    <div>Nathan</div>
    <div>Latitude: 32.7122222 </div>
    <div>Longitude: -103.1405556 </div>
    <div>equipment: Canon <br/> format: digital</div>
  `;

  const anonymousPhoto = `
    <img alt="Photo of Kids by Anonymous" src="/garden.jpg" />
    <div>Kids</div>
    <div>Anonymous</div>
    <div>Latitude: 38.9675338 </div>
    <div>Longitude: -95.2614205 </div>
    <div>equipment: Nikon</div>
  `;
  it('should format photo without destructuring', () => {
    expect(displayProblem(landscape)).toEqual(photoMarkup);
    expect(displayProblem(anonymous)).toEqual(anonymousPhoto);
  });

  it('should format photo with destructuring', () => {
    expect(displayPhoto(landscape)).toEqual(photoMarkup);
    expect(displayPhoto(anonymous)).toEqual(anonymousPhoto);
  });

  it('should format photo with destructuring in function body', () => {
    expect(displayAlt(landscape)).toEqual(photoMarkup);
    expect(displayAlt(anonymous)).toEqual(anonymousPhoto);
  });
});
