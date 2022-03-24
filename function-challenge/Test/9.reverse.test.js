/* eslint no-undef: 0 */
const testfn = require("../9.reverse");
const { add, sub, mul } = require("../2.binaryFunction");

describe("test function twice that takes a binary function", () => {
  it("test case 1 should return 8", () => {
    const a = 4;
    const b = 5;
    const bus = testfn(sub);
    expect(bus(a, b)).toEqual(b - a);
  });

  it("test case 2 should return NaN", () => {
    const a = 0;
    const b = 5;
    const bus = testfn(sub);
    expect(bus(a, b)).toEqual(b - a);
  });
});
