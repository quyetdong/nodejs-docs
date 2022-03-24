// 2.7 Without writing any new functions, show 3 ways to create the inc function
// var inc = ____ // TODO;
// inc(5); // 6
// inc(inc(5)); // 7
const addf = require("./4.addf");
const liftf = require("./5.liftf");
const curry = require("./6.curry");
const { add } = require("./2.binaryFunction");

const inc1 = addf(1);
const inc2 = liftf(add)(1);
const inc3 = curry(add, 1);

module.exports = { inc1, inc2, inc3 };
