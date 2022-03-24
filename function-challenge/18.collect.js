// 2.18 Write a collect function that takes a generator and array and produces a function that will
// collect the results into the array
// var array = [];
// var col = collect(fromTo(0, 2), array);
// col(); // 0
// col(); // 1
// col(); // undefined
// array; // [0, 1]
// const fromTo = require("./15.fromTo");

function collect(gen, array) {
  return function() {
    const item = gen();
    if (item !== undefined) {
      array.push(item);
    }
    return item;
  };
}

module.exports = collect;
// const array = [];
// const col = collect(fromTo(0, 3), array);
// console.log(col());
// console.log(col());
// console.log(col());
// console.log(array);
