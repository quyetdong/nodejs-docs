const fs = require('fs');

const readable = fs.createReadStream('name.txt', {
  encoding: 'utf8',
  highWaterMark: 16,
});
// let i = 0;

const writable = fs.createWriteStream('namecopy.txt');
readable.on('data', (chunk) => {
  // i += 1;
  // console.log(i);
  console.log(chunk);
  writable.write(chunk);
});

const writable2 = fs.createWriteStream('namecopy2.txt');
readable.pipe(writable2);

console.log('End');
