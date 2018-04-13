const booWho = (bool) => {
  // What is the new fad diet for ghost developers? The Boolean.
  let b = true;

  if (bool === true || bool === false) {
    b = true;
  } else b = false;

  return b;
};

module.exports = booWho;

booWho(null);
