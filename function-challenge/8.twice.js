// 2.8 Write a function twice that takes a binary function and returns a unary function that passes
// its argument to the binary function twice
// add(11, 11); // 22
// var doubl = twice(add);
// doubl(11); // 22
// var square = twice(mul);
// square(11); // 121

function twice(bfn) {
  return unar => bfn(unar, unar);
}

module.exports = twice;
