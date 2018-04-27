/* eslint no-undef: 0 */
const testfn = require("../8.twice");
const { add, sub, mul } = require("../2.binaryFunction");

describe("test function twice that takes a binary function", () => {
  const a = 4;
  it("test case 1 should return 8", () => {
    const doubl = testfn(add);
    expect(doubl(a)).toEqual(a * 2);
  });

  it("test case 2 should return NaN", () => {
    const square = testfn(mul);
    expect(square(a)).toEqual(a * a);
  });

  it("test case 3 should return NaN", () => {
    const zero = testfn(sub);
    expect(zero(a)).toEqual(0);
  });
});
