function identify(para) {
  if (para === undefined) {
    console.log("no parameter");
  }

  if (para === null) {
    console.log("null parameter");
  }

  return para;
}

module.exports = identify;
