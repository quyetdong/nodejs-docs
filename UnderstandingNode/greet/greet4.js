function Greetr(name) {
  this.name = name;
  this.greet = function() {
    console.log(this.name);
  };
}

module.exports = Greetr;