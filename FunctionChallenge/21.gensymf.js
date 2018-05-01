// 2.21 Make a function gensymf that makes a function that generatres unique symbols
// var genG = gensymf('G');
// var genH = gensymf('H');
// genG(); // G1
// genG(); // G2
// genH(); // H1
// genH(); // H2

function gensymf(str) {
  let iter = 0;

  return function() {
    iter += 1;
    return str + iter;
  };
}

module.exports = gensymf;
// genG = gensymf("G");
// genH = gensymf("H");
// console.log(genG());
// console.log(genG());
// console.log(genH());
// console.log(genG());
// console.log(genH());
