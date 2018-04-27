const fibonaccif = require("../23.fibonaccif");

describe("Test function fibonaccif returns a generator", () => {
  it("Test case 1 ", () => {
    const a = 0;
    const b = 1;
    const fib = fibonaccif(a, b);
    const arr = [];

    for (let i = 0; i < 6; i += 1) {
      arr.push(fib());
    }
    expect(arr).toEqual([0, 1, 1, 2, 3, 5]);
  });

  it("Test case 2 ", () => {
    const a = -5;
    const b = 2;
    const fib = fibonaccif(a, b);
    const arr = [];

    for (let i = 0; i < 6; i += 1) {
      arr.push(fib());
    }
    expect(arr).toEqual([-5, 2, -3, -1, -4, -5]);
  });
});
