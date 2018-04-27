// 2.26 Write a function exp that evaluates simple array expressions
// var sae = [mul, 5, 11];
// exp(sae); // 55
// exp(42); // 42
const { mul } = require("./2.binaryFunction");

function exp(arr) {
  if (typeof arr === "number") {
    return arr;
  } else if (typeof arr[0] === "function") {
    const [, ...parr] = [...arr];
    return arr[0](...parr);
  }
  return undefined;
}

const sae = [mul, 3, 11];

console.log(exp(sae));
console.log(exp(42));
