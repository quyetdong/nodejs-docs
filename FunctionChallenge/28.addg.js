// 2.28 Write a function addg that adds from many invocations, until it sees an empty invocation
// addg(); // undefined
// addg(2)(); // 2
// addg(2)(7)(); // 9
// addg(3)(0)(4)(); // 7
// addg(2)(); // 2

function addg(param) {
  if (param === undefined) {
    return undefined;
  }

  return function(next) {
    if (next === undefined) {
      return param;
    }
    param += next;
    return addg(param);
  };
}

console.log(addg()); // undefined
console.log(addg(2)()); // 2
console.log(addg(2)(7)(8)()); // 9
console.log(addg(3)(0)(4)()); // 7
