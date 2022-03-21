function Greetr() {
  this.name = "Duy Linh!!!";
  this.greet = function() {
    console.log(this.name);
  };
}

module.exports = new Greetr();