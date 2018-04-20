/* eslint no-undef: 0 */

import steamrollArray from '../18_SteamRoller';

describe('test function Steam Roller: ', () => {
  it('case 1 should return ["a", "b"]', () => {
    expect(steamrollArray([[['a']], [['b']]])).toEqual(['a', 'b']);
  });

  it('case 2 should return [1, 2, 3, 4]', () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
  });

  it('case 3 should return [1, 3, 4]', () => {
    expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
  });

  it('case 4 should return [1, {}, 3, 4]', () => {
    expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
  });
});
