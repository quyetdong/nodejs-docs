// 2.14 Write a to function that takes a generator and an end value, and returns another
// generator that will produce numbers up to that limit
// var index = to(from(1), 3);
// index(); // 1
// index(); // 2
// index(); // undefined
// index(); // undefined
// const from = require("./13.from");

function to(gen, end) {
  function* igen() {
    let a = gen();
    while (a < end) {
      yield a;
      a = gen();
    }
  }

  const gigen = igen();
  return () => gigen.next().value;
}

module.exports = to;
// const test = to(from(1), 3);
// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());
