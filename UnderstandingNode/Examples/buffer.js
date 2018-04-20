const buffer = Buffer.from('Hello world!');

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());

buffer[0] = 88;
console.log(buffer.toString());

const jBuffer = new ArrayBuffer(8);
jBuffer[0] = 'hell no;';
jBuffer[1] = 'ell;';

console.log(jBuffer[0], jBuffer[1]);
