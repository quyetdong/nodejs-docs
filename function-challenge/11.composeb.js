// 2.11 Write a function composeb that takes two binary functions and returns a function
// that calls them both
// composeb(add, mul)(2, 3, 7); // 35
// // add(2, 3) => 5
// // mul(5, 7) => 35

function composeb(fn1, fn2) {
  return function(a, b, d) {
    const c = fn1(a, b);
    return fn2(c, d);
  };
}

module.exports = composeb;
