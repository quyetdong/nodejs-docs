/* eslint no-undef: 0 */
const sumPrimes = require('../14_sumPrimes');

describe('test function sum primes', () => {
  it('case 1: sum primes less than 10', () => {
    expect(sumPrimes(10)).toBe(17);
  });

  it('case 2: sum primes less than 977', () => {
    expect(sumPrimes(977)).toBe(73156);
  });
});
