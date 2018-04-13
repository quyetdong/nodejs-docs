/* eslint no-undef: 0 */
// //// Check truthy predicate on all elements of collection //////////////
const booWho = require('../9_BooWho.js');
const uniteUnique = require('../10_SortedUnion.js');

// //////////////////////////////////////
test('check boolean primitive 1', () => {
  expect(booWho(true)).toBe(true);
});

test('check boolean primitive 2', () => {
  expect(booWho(false)).toBe(true);
});

test('check boolean primitive 3', () => {
  expect(booWho('true')).toBe(false);
});

test('check boolean primitive 4', () => {
  expect(booWho([].slice)).toBe(false);
});

test('check boolean primitive 5', () => {
  expect(booWho(1)).toBe(false);
});

test('check boolean primitive 5', () => {
  expect(booWho({ a: 1 })).toBe(false);
});

// /////////////////////////////
test('find unique elements 1', () => {
  expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
});

test('find unique elements 2', () => {
  expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([
    1,
    3,
    2,
    [5],
    [4],
  ]);
});

test('find unique elements 3', () => {
  expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
});

test('find unique elements 4', () => {
  expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([
    1,
    2,
    3,
    5,
    4,
    6,
    7,
    8,
  ]);
});
