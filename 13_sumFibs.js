// ////////////// Sum All Odd Fibonacci Numbers /////////////
const sumFibs1 = (num) => {
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;
  let fib = 0;

  while (fib1 <= num) {
    if (fib1 % 2 === 1) {
      sum += fib1;
    }

    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
  }

  return sum;
};

module.exports = sumFibs1;

// /////////////////////////////////////////////////
const sumFibs2 = (num) => {
  const m = new Map();

  const fib = (n) => {
    if (n <= 1) {
      m.set(n, 1);
      return 1;
    }
    if (!m.has(n)) {
      m.set(n, fib(n - 1) + fib(n - 2));
    }

    return m.get(n);
  };

  let sum = 0;
  for (let i = 0; i < num; i += 1) {
    fib(i);
    if (m.has(i) && m.get(i) % 2 === 1) {
      if (m.get(i) <= num) {
        sum += m.get(i);
      } else break;
    }
  }

  return sum;
};

sumFibs2(1000);

// ////////////////////////////////////////////////
const sumFibs3 = (num) => {
  const m = new Map();

  const memorized = fn =>
    function cache(n) {
      if (!m.has(n)) {
        m.set(n, fn(n));
      }

      return m.get(n);
    };

  const fib = memorized((n) => {
    if (n <= 1) return 1;

    return fib(n - 1) + fib(n - 2);
  });

  let sum = 0;
  for (let i = 0; i < num; i += 1) {
    fib(i);
    if (m.has(i) && m.get(i) % 2 === 1) {
      if (m.get(i) <= num) {
        sum += m.get(i);
      } else break;
    }
  }

  return sum;
};

sumFibs3(1000);
// fib(0)  1
// fib(1)  1
// fib(2)  2
// fib(3)  3
// fib(4)  5
// fib(5)  8
