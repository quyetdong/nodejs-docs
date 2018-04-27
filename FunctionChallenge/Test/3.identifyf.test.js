const identifyf = require("../3.identifyf");
const expect = require("chai").expect;

describe("test function identifyf takes an argument and return a function", () => {
  it("test case 1 should return ", () => {
    const a = 0;
    const fn = identifyf(a);
    expect(fn()).to.equal(a);
  });

  it("test case 1 should return ", () => {
    const a = [];
    const fn = identifyf(a);
    expect(fn()).to.equal(a);
  });

  it("test case 1 should return ", () => {
    const fn = identifyf();
    expect(fn()).to.equal(undefined);
  });

  it("test case 1 should return ", () => {
    const a = null;
    const fn = identifyf(a);
    expect(fn()).to.equal(a);
  });
});
