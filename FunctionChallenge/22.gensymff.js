// 2.22 Write a function gensymff that takes a unary function and a seed and returns a gensymf
// var gensymf = gensymff(inc, 0);
// var genG = gensymf('G');
// var genH = gensymf('H');
// genG(); // G1
// genG(); // G2
// genH(); // H1
// genH(); // H2
const { inc1: inc } = require("./7.inc");

function gensymff(ufn, seed) {
  return str => {
    let iter = seed;

    return function gensym() {
      iter = ufn(iter);
      return str + iter;
    };
  };
}

gensymf = gensymff(inc, 0);
genG = gensymf("G");
genH = gensymf("H");
console.log(genH());
console.log(genG());
console.log(genG());
console.log(genG());
console.log(genH());
