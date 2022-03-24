// 2.30 Write a function arrayg that will build an arry from many invocations
// arrayg(); // []
// arrayg(3)(4)(); // [3, 4]
// arrayg(3)(4)(5)(); // [3, 4, 5]

function arrayg(param) {
  const arr = [];
  if (param === undefined) {
    return arr;
  }
  arr.push(param);

  return function invoc(next) {
    if (next === undefined) {
      return arr;
    }
    arr.push(next);

    return invoc;
  };
}

console.log(arrayg()); // []
console.log(arrayg(3)(4)()); // [3, 4]
console.log(arrayg(3)(4)(5)(6)()); // [3, 4, 5]
