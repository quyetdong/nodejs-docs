// 2.6 Write a function curry that takes a binary function and an argument, and returns
// a function that can take a second arguments
// var add3 = curry(add, 3);
// add3(4); // 7
// curry(mul, 5)(6); // 30

function curry(bfn, param) {
  return param2 => bfn(param, param2);
}

module.exports = curry;
