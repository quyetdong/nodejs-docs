/* eslint no-undef: 0 */
const testfn = require('../13.from');
// const { add, sub, mul } = require('../2.binaryFunction');

describe('test function from that produces a generator', () => {
  const series = testfn(2);

  it('test case 1 should return 2', () => {
    expect(series()).toEqual(2);
  });

  it('test case 2 should return 3', () => {
    expect(series()).toEqual(3);
  });

  it('test case 3 should return 4', () => {
    expect(series()).toEqual(4);
  });
});
