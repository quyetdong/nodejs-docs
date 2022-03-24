function identifyf(param) {
  return function() {
    return param;
  };
}

module.exports = identifyf;
