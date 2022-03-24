// add, sub, and mul, that take 2 numbers and return their sum, difference, and product //
function checkNumber(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Type error: not type of number");
    throw new Error("Type error: not number type");
  } else if (`${a}` === "NaN" || `${b}` === "NaN") {
    console.log("Type error: a or b is NaN");
    throw new Error("Type error: NaN");
  }
}

function add(a, b) {
  checkNumber(a, b);

  return a + b;
}

function sub(a, b) {
  checkNumber(a, b);

  return a - b;
}

function mul(a, b) {
  checkNumber(a, b);

  return a * b;
}

module.exports = { add, sub, mul };

// add(3, '4'); // 7
// sub(3, 4); // -1
// mul(3, 4); // 12
