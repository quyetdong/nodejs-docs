/* eslint no-undef: 0 */
const testfn = require('../16.element');
const gen = require('../15.fromTo');
// const { add, sub, mul } = require('../2.binaryFunction');

describe('test function element that produces a generator', () => {
  const arr = [1, 3, 5, 7, 9];
  const start = 1;
  const end = 3;
  const series = testfn(arr, gen(start, end));

  it('test case 1 should return 3', () => {
    expect(series()).toEqual(3);
  });

  it('test case 2 should return 5', () => {
    expect(series()).toEqual(5);
  });

  it('test case 3 should return undefined', () => {
    expect(series()).toEqual(undefined);
  });
});
