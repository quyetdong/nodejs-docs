const person = {
  firstname: '',
  lastname: '',
  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  },
};

const Duy = Object.create(person);
Duy.firstname = 'Tran Manh';
Duy.lastname = 'Duy';

Duy.greet();
// console.log(Duy.__proto__ === person); // true
