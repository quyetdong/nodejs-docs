const filter = require("../19.filter");

function even(value) {
  return value % 2 === 0;
}

function* fromTo(a, b) {
  while (a <= b) {
    yield a;
    a += 1;
  }
}

describe("Test function filter takes a generator and a predicate as params", () => {
  it("Test case 1 ", () => {
    const a = 0;
    const b = 5;
    const fil = filter(fromTo(a, b), even);
    const arr = [];

    for (let i = fil(); i !== undefined; i = fil()) {
      arr.push(i);
    }

    expect(arr).toEqual([0, 2, 4]);
  });

  it("Test case 2 ", () => {
    const a = -3;
    const b = 7;
    const fil = filter(fromTo(a, b), even);
    const arr = [];

    for (let i = fil(); i !== undefined; i = fil()) {
      arr.push(i);
    }

    expect(arr).toEqual([-2, 0, 2, 4, 6]);
  });
});
