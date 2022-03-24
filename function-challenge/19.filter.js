// 2.19 Write a filter function that takes a generator and a predicate and produces
// a generator that produces only the values approved by the predicate
// var fil = filter(fromTo(0, 5),
//   function even(value) {
//     return (value % 2) === 0;
//   });
// fil(); // 0
// fil(); // 2
// fil(); // 4
// fil(); // undefined

function filter(gen, pre) {
  function* inside() {
    let a = 0;
    while (a !== undefined) {
      a = gen.next().value;
      while (!pre(a)) {
        a = gen.next().value;
        if (a === undefined) {
          return;
        }
      }
      yield a;
    }
  }

  const filval = inside();

  return function() {
    return filval.next().value;
  };
}

// function even(value) {
//   return (value % 2) === 0;
// }

// function *fromTo(a, b) {
//   while(a <= b) {
//     yield a;
//     a += 1;
//   }
// }

// const fil = filter(fromTo(0, 5), even);
// console.log(fil())
// console.log(fil())
// console.log(fil())
// console.log(fil())
// console.log(fil())

module.exports = filter;
