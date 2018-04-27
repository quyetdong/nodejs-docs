// 2.9 Write reverse, a function that reverses the arguments of a binary function
// var bus = reverse(sub);
// bus(3, 2) // -1

function reverse(bfn) {
  return (a, b) => bfn(b, a);
}

module.exports = reverse;
