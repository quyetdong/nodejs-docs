/* eslint no-undef: 0 */
const identify = require("../1.identify");
const assert = require("assert");

describe("test function identify", () => {
  it("test case 1 should return 0 with input value is 0", () => {
    assert.strictEqual(identify(0), 0);
  });

  it("test case 2 should return [] with input value is []", () => {
    const a = [];
    assert.strictEqual(identify(a), a);
  });

  it("test case 3 should return undefined with input value is undefined", () => {
    assert.strictEqual(identify(0), 0);
  });

  it("test case 4 should return null with input value is null", () => {
    assert.strictEqual(identify(0), 0);
  });
});
