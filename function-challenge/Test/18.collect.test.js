/* eslint no-undef: 0 */
const testfn = require('../18.collect');
const gen = require('../15.fromTo');
// const { add, sub, mul } = require('../2.binaryFunction');

describe('test function collect that takes a generator and an array', () => {
  const arr = [];
  const start = 1;
  const end = 3;
  const normalseries = testfn(gen(start, end), arr);

  it('test case 1 should return 1', () => {
    expect(normalseries()).toEqual(1);
  });

  it('test case 2 should return 2', () => {
    expect(normalseries()).toEqual(2);
  });

  it('test case 3 should return undefined', () => {
    expect(normalseries()).toEqual(undefined);
  });

  it('test case 4 should return [1, 2]', () => {
    expect(arr).toEqual([1, 2]);
  });
});
