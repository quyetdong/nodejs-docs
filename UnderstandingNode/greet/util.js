// let greet = require('./greet');

// greet.english();
// greet.spanish();
// console.log(greet.classmates);

let util = require('util');

let name = "Dinh Phuoc";
let greeting = util.format("Hello my friend: %s", name);

console.log(greeting);
util.log(greeting);