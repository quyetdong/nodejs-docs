// 2.16 Write an element function that takes an array and a generator and returns a generator that
// will produce elements from the array
// var ele = element([1, 2, 3, 4], fromTo(1, 3));

// ele(); // 2 => index 1
// ele(); // 3 => index 2
// ele(); // undefined => index undefined
// const fromTo = require("./15.fromTo");

function element(arr, gen) {
  function* igen() {
    let a = gen();
    const { length: len } = arr;
    while (a !== undefined && a < len) {
      yield arr[a];
      a = gen();
    }
  }

  const gigen = igen();
  return () => gigen.next().value;
}

module.exports = element;
// var ele = element([1, 2, 3, 4], fromTo(1, 3));
// console.log(ele())
// console.log(ele())
// console.log(ele())
