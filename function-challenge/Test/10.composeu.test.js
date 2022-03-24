const composeu = require("../10.composeu");

describe("Test function composeu takes two unary functions as params", () => {
  it("Test case 1 ", () => {
    function doubl(a) {
      return a * 2;
    }

    function square(side) {
      return side * side;
    }

    expect(composeu(doubl, square)(5)).toBe(100);
  });

  it("Test case 2 ", () => {
    function doubl(a) {
      return a * 2;
    }

    function square(side) {
      return side * side;
    }

    expect(composeu(doubl, square)(0)).toBe(0);
  });
});
