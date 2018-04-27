/* eslint no-undef: 0 */
const testfn = require("../5.liftf");
const { add, sub, mul } = require("../2.binaryFunction");

describe("test function liftf that takes a binary function", () => {
  it("test case 1 should return 7", () => {
    const a = 3;
    const b = 4;
    expect(testfn(add)(a)(b)).toEqual(a + b);
  });

  it("test case 2 should return NaN", () => {
    const a = 6;
    const b = 9;
    expect(testfn(mul)(a)(b)).toEqual(a * b);
  });
});
