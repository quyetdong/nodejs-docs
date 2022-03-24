// 2.12 Write a limit function that allows a binary function to be called a limited number of times
// var addLimited = limit(add, 1);
// addLimited(3, 4); // 7
// addLimited(3, 5); // undefined
// addLimited(4, 5); // undefined
// const { add } = require('./2.binaryFunction');

function limit(bfn, param) {
  let count = 0;

  return function(a, b) {
    count += 1;
    while (count <= param) {
      return bfn(a, b);
    }
  };
}

module.exports = limit;
