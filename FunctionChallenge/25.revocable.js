// 2.25 Make a revocable function that takes a binary function, and returns an object containing an
// invoke function that can invoke the binary function, and a revoke function that disables the invoke function
// var rev = revocable(add);
// var addRev = rev.invoke;

// addRev(3, 4); // 7
// rev.revoke();
// addRev(3, 4); // undefined
const { add } = require("./2.binaryFunction");

function revocable(bfn) {
  let check = true;
  return {
    invoke(a, b) {
      if (check) {
        return bfn(a, b);
      }
      return undefined;
    },
    revoke() {
      check = !check;
    }
  };
}

const rev = revocable(add);
const addRev = rev.invoke;
console.log(addRev(3, 4)); // 7
rev.revoke();
console.log(addRev(3, 4)); // undefined
// rev.revoke();
console.log(addRev(5, 4));
