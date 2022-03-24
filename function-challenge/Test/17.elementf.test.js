/* eslint no-undef: 0 */
const testfn = require('../17.elementf');
const gen = require('../15.fromTo');
// const { add, sub, mul } = require('../2.binaryFunction');

describe('test function element that produces a generator', () => {
  const arr = [1, 3, 5, 7];
  const start = 1;
  const end = 3;
  const normalseries = testfn(arr, gen(start, end));
  const fullseries = testfn(arr);

  it('test case 1 should return 3', () => {
    expect(normalseries()).toEqual(3);
  });

  it('test case 2 should return 5', () => {
    expect(normalseries()).toEqual(5);
  });

  it('test case 3 should return undefined', () => {
    expect(normalseries()).toEqual(undefined);
  });

  it('test case 4 should return 1', () => {
    expect(fullseries()).toEqual(1);
  });

  it('test case 5 should return 3', () => {
    expect(fullseries()).toEqual(3);
  });

  it('test case 6 should return 5', () => {
    expect(fullseries()).toEqual(5);
  });

  it('test case 7 should return 7', () => {
    expect(fullseries()).toEqual(7);
  });

  it('test case 8 should return undefined', () => {
    expect(fullseries()).toEqual(undefined);
  });
});
