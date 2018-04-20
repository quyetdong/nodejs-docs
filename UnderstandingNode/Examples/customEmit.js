const Emitter = function (name) {
  this.name = name;
  this.event = {};
};

Emitter.prototype.on = function (type, listener) {
  this.event[type] = this.event[type] || [];
  this.event[type].push(listener);
};

Emitter.prototype.emit = function (type) {
  if (this.event[type]) {
    this.event[type].forEach((listener) => {
      listener();
    });
  }
};

module.exports = Emitter;
