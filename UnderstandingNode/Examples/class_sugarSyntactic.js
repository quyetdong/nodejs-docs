const EventEmitter = require('events');

class Person extends EventEmitter {
  constructor() {
    super();
    this.workHourTime = 9;
  }

  action(type, data) {
    console.log(`Event happened: ${type}`);
    this.emit(type, data);
  }
}

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

// ////////////////////////////////////////////
class Dev {
  constructor(firstname, lastname) {
    this.firstname = firstname || 'John';
    this.lastname = lastname || 'Doe';
  }

  travel() {
    console.log(`${this.firstname} ${this.lastname} travels alot`);
  }
}

const boss = new Dev();
boss.travel();

// let Person = function(firstname, lastname) {
//   this.firstname = firstname || 'John';
//   this.lastname = lastname || 'Doe';
// };

// Person.prototype.greet = function() {
//   console.log(`${this.firstname} ${this.lastname} welcome you!`);
// };

// let hai = new Person("Hai", "Do");
// hai.greet();
