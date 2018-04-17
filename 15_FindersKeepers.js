// ////// Find the first element in the array passes a truth test ////////
const findElement = (arr, func) => {
  let num;

  for (let i = 0, { length } = arr; i < length; i += 1) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    }
  }

  return num;
};

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
module.exports = findElement;

// ////////////////////////////////////////////////////////////////////
// const findElement1 = (arr, func) => {
//   arr = arr.filter(el => func(el));

//   return arr[0];
// };

// ///////////////////////////////////////////////////////////////////
// findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
