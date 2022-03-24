// 2.4 Write a function addf that adds from 2 invocations
// addf(3)(4); // 7
function addf(a) {
  return function(b) {
    return a + b;
  };
}

module.exports = addf;
