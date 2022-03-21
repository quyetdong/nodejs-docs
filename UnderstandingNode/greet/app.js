let greet1 = require('./greet1');
greet1();

let greet2 = require('./greet2');
greet2.greet();

let greet3 = require('./greet3');
greet3.greet();
greet3.name = "Viet Anh!!!";

let greet3b = require('./greet3');
greet3.greet();

let Greet4 = require('./greet4');
let greet4 = new Greet4("Khue Hai!!!!");
greet4.greet();