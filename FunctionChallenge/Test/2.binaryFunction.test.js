/* eslint no-undef: 0 */
const { add, sub, mul } = require("../2.binaryFunction");
const assert = require("assert");
const expect = require("chai").expect;

// // Test add function ////////////
describe("test function add", () => {
  it("test case 1.1 should return 3 with input value is 0, 3", () => {
    const a = 0;
    const b = 0;
    const c = a + b;
    assert.strictEqual(add(a, b), c);
  });

  it("test case 1.2 should return 15 with input value is 9, 6", () => {
    const a = 9;
    const b = 6;
    const c = a + b;
    assert.strictEqual(add(a, b), c);
  });

  it("test case 2 should throw Error with input value is 2, []", () => {
    const a = 2;
    const b = [];
    assert.throws(
      () => {
        add(a, b);
      },
      Error,
      "error"
    );
  });

  it("test case 3 should throw Error with input value is 3, undefined", () => {
    const a = 3;
    const b = undefined;
    assert.throws(
      () => {
        add(a, b);
      },
      Error,
      "error"
    );
  });

  it("test case 4 should throw Error with input value is null, 5", () => {
    const a = null;
    const b = 5;
    assert.throws(
      () => {
        add(a, b);
      },
      Error,
      "error"
    );
  });

  it("test case 5 should throw Error with input value is '', 5", () => {
    const a = "";
    const b = 5;
    assert.throws(
      () => {
        add(a, b);
      },
      Error,
      "error"
    );
  });

  it("test case 6 should throw Error with input value is NaN, 12", () => {
    const a = NaN;
    const b = 12;
    assert.throws(
      () => {
        add(a, b);
      },
      Error,
      "error"
    );
  });
});

// // Test add function ////////////
describe("test function sub", () => {
  it("test case 1.1 should return 3 with input value is 0, 3", () => {
    const a = 0;
    const b = 0;
    const c = a - b;
    expect(sub(a, b)).to.equal(c);
  });

  it("test case 1.2 should return 15 with input value is 9, 6", () => {
    const a = 9;
    const b = 6;
    const c = a - b;
    expect(sub(a, b)).to.equal(c);
  });

  it("test case 2 should throw Error with input value is 2, []", () => {
    const a = 2;
    const b = [];
    expect(() => {
      sub(a, b);
    }).to.throw(Error, "", "message");
  });

  it("test case 3 should throw Error with input value is 3, undefined", () => {
    const a = 3;
    let b;
    expect(() => {
      sub(a, b);
    }).to.throw(Error, "", "message");
  });

  it("test case 4 should throw Error with input value is null, 5", () => {
    const a = null;
    const b = 5;
    expect(() => {
      sub(a, b);
    }).to.throw(Error, "", "message");
  });

  it("test case 5 should throw Error with input value is '', 5", () => {
    const a = "";
    const b = 5;
    expect(() => {
      sub(a, b);
    }).to.throw(Error, "", "message");
  });

  it("test case 6 should throw Error with input value is NaN, 12", () => {
    const a = NaN;
    const b = 12;
    expect(() => {
      sub(a, b);
    }).to.throw(Error, "Type error: NaN", "message");
  });
});
