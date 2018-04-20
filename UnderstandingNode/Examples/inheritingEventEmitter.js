const EventEmitter = require('events');
const util = require('util');

const Person = function () {
  EventEmitter.call(this);
  this.action = function (type, data) {
    console.log(`Event happened: ${type}`);
    this.emit(type, data);
  };
};

util.inherits(Person, EventEmitter);
Person.prototype.workHourTime = 9;

const duy = new Person();

duy.on('greet', (data) => {
  console.log(`${data} greeted Duy! `);
});

duy.on('work', function () {
  console.log(`Duy work: ${this.workHourTime} hours a day`);
});

duy.action('greet', 'Sao Khue');
duy.action('work');
console.log(duy);
