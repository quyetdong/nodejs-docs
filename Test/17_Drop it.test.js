/* eslint no-undef: 0 */

import dropElements from '../17_Drop it';

describe('test function Drop It: ', () => {
  it('case 1 should return [3, 4]', () => {
    expect(dropElements([1, 2, 3, 4], n => n >= 3)).toEqual([3, 4]);
  });

  it('case 2 should return [1, 0, 1]', () => {
    expect(dropElements([0, 1, 0, 1], n => n === 1)).toEqual([1, 0, 1]);
  });

  it('case 3 should return [1, 2, 3]', () => {
    expect(dropElements([1, 2, 3], n => n > 0)).toEqual([1, 2, 3]);
  });

  it('case 4 should return []', () => {
    expect(dropElements([1, 2, 3, 4], n => n > 5)).toEqual([]);
  });
});
