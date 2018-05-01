/* eslint no-undef: 0 */
const testfn = require('../20.concat');
const gen = require('../15.fromTo');
// const { add, sub, mul } = require('../2.binaryFunction');

describe('test function concat that takes two generators', () => {
  const gen1 = gen(0, 3);
  const gen2 = gen(4, 6);
  const normalseries = testfn(gen1, gen2);

  it('test case 1 should return 0', () => {
    expect(normalseries()).toEqual(0);
  });

  it('test case 2 should return 1', () => {
    expect(normalseries()).toEqual(1);
  });

  it('test case 3 should return 2', () => {
    expect(normalseries()).toEqual(2);
  });

  it('test case 4 should return 4', () => {
    expect(normalseries()).toEqual(4);
  });

  it('test case 5 should return 5', () => {
    expect(normalseries()).toEqual(5);
  });

  it('test case 6 should return undefined', () => {
    expect(normalseries()).toEqual(undefined);
  });
});
