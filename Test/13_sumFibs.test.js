/* eslint no-undef: 0 */
const sumFibs = require('../13_sumFibs');

describe('test function sum odd fibonacci numbers', () => {
  it('case 1', () => {
    expect(sumFibs(1000)).toBe(1785);
  });

  it('case 2', () => {
    expect(sumFibs(4000000)).toBe(4613732);
  });

  it('case 3', () => {
    expect(sumFibs(4)).toBe(5);
  });
});
