const Emitter = require('events');

const eventEmitter = new Emitter();

eventEmitter.on('see', () => {
  console.log("He looks 'qua kinh'!");
});

console.log('See someone and give comment');
eventEmitter.emit('see');
