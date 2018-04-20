// ////// Drop the elements of array until the predicate returns true ////////
const dropElements1 = (oldArr, func) => {
  // Drop them elements.
  let [...arr] = [...oldArr];
  while (arr.length > 0 && !func(arr[0])) {
    [, ...arr] = [...arr];
  }

  return arr;
};

module.exports = dropElements1;

// /////////////////////////////////////////////////
// const dropElements2 = (arr, func) => {
//   if (arr.length == 0) return [];

//   if (!func(arr[0])) return dropElements2(arr.slice(1), func);
//   return arr;
// };

// ////////////////////////////////////////////////
// const dropElements3 = (arr, func) => {
//   // Drop them elements.
//   while (true) {
//     // gay ra loop vo tan
//     if (!func(arr[0])) {
//       arr.shift();
//     } else {
//       break;
//     }
//   }

//   return arr;
// };

// // //////////////// ????? /////////////////////
// function dropElements4(arr, func) {
//   // drop them elements.
//   for (let i = 0, times = arr.length; i < times; i++) {
//     if (func(arr[0])) {
//       break;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }

// // ////////////////////////////////////////////
// function dropElements5(arr, func) {
//   return arr.slice(
//     arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length,
//     arr.length,
//   );
// }

// // test here
// console.log(dropElements1([1, 2, 3, 4], n => n >= 3));
// dropElements2([1, 2, 3, 4], n => n >= 3);
