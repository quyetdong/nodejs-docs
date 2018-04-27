// 2.27 Modify exp to evaluate nested array expressions
// var nae = [
//   Math.sqrt,
//   [ add,
//     [square, 3],
//     [square, 4]
//   ]
// ];
// exp(nae); // 5
const { mul, add } = require("./2.binaryFunction");

const square = a => mul(a, a);

function exp(arr) {
  const { length: len } = arr;

  if (typeof arr[0] === "function") {
    const earr = [arr[0]];
    for (let i = 1; i < len; i += 1) {
      if (typeof arr[i][0] === "function") {
        earr.push(exp(arr[i]));
      } else {
        earr.push(arr[i]);
      }
    }
    return calc(earr);
  } else if (typeof arr === "number") {
    return arr;
  }
  return undefined;

  function calc(arr) {
    const [, ...parr] = [...arr];
    return arr[0](...parr);
  }
}

const nae = [Math.sqrt, [add, [mul, 3, 3], [add, 90, 1]]];
console.log(exp(nae)); // 10
