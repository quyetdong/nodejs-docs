/** Find the smallest common multiple
 *  of sequential numbers between two numbers
 *  including them
 ** */

const smallestCommon2 = (para) => {
  const min = Math.min(...para);
  const max = Math.max(...para);
  let num = 1;

  const arr = [];

  for (let i = max; i >= min; i -= 1) {
    arr.push(i);
  }

  num = arr.reduce((acc, cur) => {
    let i = 2;
    const temp = acc;
    let multi = temp;

    while (multi % cur) {
      multi = temp * i;
      i += 1;
    }

    return multi;
  });

  return num;
};

smallestCommon2([5, 1]);
module.exports = smallestCommon2;

// ////////////////////////////////////////////
// const smallestCommon1 = arr => {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     let num = max * (max - 1);

//     const multiple = (large, small) => {
//         let i = 2;
//         let num = large;

//         while(true) {
//             if(large % small == 0) {
//                 return large;
//             }
//             large = num * i;
//             i++;
//         }
//     };

//     for(let i = max - 2; i >= min; i--) {
//         num = multiple(num, i);
//     }

//     console.log(num);
//     return num;
// };

// smallestCommon1([23, 18]);

// //////////////////////////////////////
// const smallestCommon3 = (arr) => {
//   const ucln = (small, large) => {
//     const k = large - small;
//     if (k == 0) return small;
//     else if (k >= small) return ucln(small, k);
//     return ucln(k, small);
//   };

//   console.log(ucln(12, 18));
// };

// smallestCommon3();
