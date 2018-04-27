/* eslint no-undef: 0 */
const { inc1: testfn1, inc2: testfn2, inc3: testfn3 } = require("../7.inc");
// const {add: add, sub: sub, mul: mul} = require('../2.binaryFunction');

describe("test function curry that takes a binary function", () => {
  const a = 4;

  it("test case 1 should return 7", () => {
    expect(testfn1(a)).toEqual(a + 1);
  });

  it("test case 2 should return NaN", () => {
    expect(testfn1(testfn1(a))).toEqual(a + 2);
  });

  it("test case 2 should return NaN", () => {
    expect(testfn2(testfn1(a))).toEqual(a + 2);
  });

  it("test case 2 should return NaN", () => {
    expect(testfn3(testfn1(a))).toEqual(a + 2);
  });
});
