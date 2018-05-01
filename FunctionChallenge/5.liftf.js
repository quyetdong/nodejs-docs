// 2.4 Write a function addf that adds from 2 invocations
// addf(3)(4); // 7
// const { add, sub, mul } = require("./2.binaryFunction");

function liftf(bfn) {
  return a => b => bfn(a, b);
}

module.exports = liftf;
// console.log(liftf(add)(3)(4));
