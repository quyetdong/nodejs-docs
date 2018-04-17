/* eslint no-undef: 0 */

import smallestCommon from '../16_SmallestCommonMultiple';

describe('test function Smallest Common Multiple: ', () => {
  it('case 1 should return 60', () => {
    expect(smallestCommon([1, 5])).toBe(60);
  });

  it('case 2 should return 60', () => {
    expect(smallestCommon([5, 1])).toBe(60);
  });

  it('case 3 should return 360360', () => {
    expect(smallestCommon([1, 13])).toBe(360360);
  });

  it('case 4 should return 6056820', () => {
    expect(smallestCommon([23, 18])).toBe(6056820);
  });
});
