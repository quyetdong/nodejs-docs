// ///////////// Sum All Primes less than or equal the Provided Number ////////////
function sumPrimes(num) {
  const sum = 0;

  if (num === 2) return 2;

  return (
    sum +
    ((upper) => {
      for (let i = 2; i < upper; i += 1) {
        if (upper % i === 0) return 0;
      }
      return upper;
    })(num) +
    sumPrimes(num - 1)
  );
}

module.exports = sumPrimes;
// console.log(sumPrimes(10));

// //////////////////////////////////////////
const sumPrimes1 = (num) => {
  let sum = 0;
  let add = 0;

  if (num < 2) {
    return sum;
  } else if (num >= 2) {
    sum += 2;
  }

  for (let i = 3; i <= num; i += 1) {
    add = i;

    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) add = 0;
    }

    sum += add;
  }

  return sum;
};

sumPrimes1(10);
