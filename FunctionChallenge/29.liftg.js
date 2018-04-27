// 2.29 Write a function liftg that takes a binary function and apply it to many invocations
// liftg(mul)(); // undefined
// liftg(mul)(3)(); // 3
// liftg(mul)(3)(0)(4)(); // 0
// liftg(mul)(1)(2)(4)(8)(); // 64
function mul(a, b) {
  if (a === undefined && b === undefined) {
    return undefined;
  }
  if (b === undefined) {
    return a;
  }
  return a * b;
}

function add(a, b) {
  if (a === undefined && b === undefined) {
    return undefined;
  }
  if (b === undefined) {
    return a;
  }
  return a + b;
}

//* * Liftg Function */
function liftg(bfn) {
  return function(param) {
    if (param === undefined) {
      return param;
    }

    return function invoc(next) {
      if (next === undefined) {
        return param;
      }
      param = bfn(param, next);
      return invoc;
    };
  };
}

console.log(liftg(mul)(5)); // undefined
console.log(liftg(add)(3)()); // 3
console.log(liftg(add)(3)(4)(4)()); // 0
console.log(liftg(mul)(1)(2)(4)(8)()); // 64
