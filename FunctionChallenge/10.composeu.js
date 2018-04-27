// 2.10 Write a function composeu that takes two unary functions and returns a unary
// function that calls them both
// composeu(doubl, square)(5); // 100
// doubl(5) => 5 + 5 = 10
// square(10) => 100

function composeu(fn1, fn2) {
  return function(a) {
    const b = fn1(a);
    return fn2(b);
  };
}

module.exports = composeu;
