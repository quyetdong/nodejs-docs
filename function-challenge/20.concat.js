// 2.20 Write a concat function that takes 2 generator and produces a generator that combines
// the sequences
// var con = concat(fromTo(0, 3), fromTo(0, 2));
// con(); // 0
// con(); // 1
// con(); // 2
// con(); // 0
// con(); // 1
// con(); // undefined
// const fromTo = require("./15.fromTo");

function concat(gen1, gen2) {
  let check = 0;
  let iter = 0;

  return () => {
    if (check === undefined) {
      iter = gen2();
    } else {
      iter = gen1();
      check = iter;
      if (check === undefined) {
        iter = gen2();
      }
    }

    return iter;
  };
}

module.exports = concat;
// const con = concat(fromTo(0, 3), fromTo(0, 1));
// console.log(con()); // 0
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
