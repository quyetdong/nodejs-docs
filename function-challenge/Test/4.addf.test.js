const testfn = require("../4.addf");

describe("test function addf that adds from two invocations", () => {
  it("test case 1 should return 7", () => {
    const a = 3;
    const b = 4;
    expect(testfn(a)(b)).toEqual(a + b);
  });

  it("test case 2 should return NaN", () => {
    let a = undefined;
    const b = 5;
    expect(`${testfn(a)(b)}`).toEqual("NaN");
  });
});
