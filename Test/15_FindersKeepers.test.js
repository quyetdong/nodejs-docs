/* eslint no-undef: 0 */

import findElement from '../15_FindersKeepers';

describe('test function Finders Keepers: ', () => {
  it('case 1', () => {
    expect(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)).toBe(8);
  });

  it('case 2', () => {
    expect(findElement([1, 3, 5, 9], num => num % 2 === 0)).toBe(undefined);
  });
});
