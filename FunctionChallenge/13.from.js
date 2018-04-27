// 2.13 Write a from function that produces a generator that will produce a series of values
// var index = from(0);
// index(); // 0
// index(); // 1
// index(); // 2

function from(start) {
  function* gen() {
    while (true) {
      yield start;
      start += 1;
    }
  }

  const inc = gen();
  return function() {
    return inc.next().value;
  };
}

module.exports = from;

// let index = from(0);
// console.log(index())
// console.log(index())
// console.log(index())
