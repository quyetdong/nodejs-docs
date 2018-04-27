// 2.15 Write a fromTo function that return a generator that produce values in a range
// var index = fromTo(0, 3);
// index(); // 0
// index(); // 1
// index(); // 2
// index(); // undefined

function fromTo(start, end) {
  function* gen() {
    let i = start;
    while (i < end) {
      yield i;
      i += 1;
    }
  }

  const igen = gen();
  return function() {
    return igen.next().value;
  };
}

module.exports = fromTo;

// var index = fromTo(0, 3);
// console.log(index())
// console.log(index())
// console.log(index())
// console.log(index())
