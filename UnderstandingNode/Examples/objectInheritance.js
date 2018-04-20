const Person = function (firstname, lastname) {
  this.firstname = firstname || 'John';
  this.lastname = lastname || 'Doe';
};

const Dev = function (firstname, lastname) {
  Person.call(this, firstname, lastname);
  this.dress = function () {
    console.log(`${this.firstname} ${this.lastname} loves to wear NodeJS shirt!`);
  };
};

const hai = new Dev('Hai', 'Do');
const boss = new Dev();
hai.dress();
boss.dress();
