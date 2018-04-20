const fs = require('fs');

const name1 = fs.readFile('name.txt', 'utf8', (error, data) => {
  console.log(data);
});

const names = fs.readFileSync(`${__dirname}/name2.txt`, 'utf8');

console.log(name1, names);
