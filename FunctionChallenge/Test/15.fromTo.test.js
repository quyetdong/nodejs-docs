/* eslint no-undef: 0 */
const testfn = require('../15.fromTo');
// const { add, sub, mul } = require('../2.binaryFunction');

describe('test function to that produces a generator', () => {
  const start = 3;
  const end = 5;
  const series = testfn(start, end);

  it('test case 1 should return 3', () => {
    expect(series()).toEqual(3);
  });

  it('test case 2 should return 4', () => {
    expect(series()).toEqual(4);
  });

  it('test case 3 should return undefined', () => {
    expect(series()).toEqual(undefined);
  });
});
