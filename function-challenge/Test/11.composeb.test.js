const composeb = require("../11.composeb");

function add(a, b) {
  return a + b;
}

function multi(c, d) {
  return c * d;
}

describe("Test function composeb takes two binary functions as params", () => {
  it("Test case 1 ", () => {
    expect(composeb(add, multi)(2, 3, 7)).toBe(35);
  });

  it("Test case 2 ", () => {
    expect(composeb(add, multi)(3, -3, 14)).toBe(0);
  });
});
