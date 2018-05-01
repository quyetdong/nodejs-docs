// 2.23 Make a function fibonaccif that returns a generator that will return the next
// fibonacci number
// var fib = fibonaccif(0, 1); // must by fibonaccif(0, 1)
// fib(); // 0
// fib(); // 1
// fib(); // 1
// fib(); // 2
// fib(); // 3
// fib(); // 5

function fibonaccif(a, b) {
  function* fibonacci() {
    while (true) {
      yield a;
      b += a;
      a = b - a;
    }
  }

  const genfib = fibonacci();
  return function() {
    return genfib.next().value;
  };
}

module.exports = fibonaccif;
// let fib = fibonaccif(0, 1);
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
