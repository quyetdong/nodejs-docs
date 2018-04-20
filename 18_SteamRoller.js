// //// Flatten a nested array //////////////
const steamrollArray1 = (arr) => {
  let newArr = [];
  const { length } = arr;

  for (let i = 0; i < length; i += 1) {
    if (Array.isArray(arr[i])) {
      newArr = [...newArr, ...steamrollArray1(arr[i])];
    } else newArr.push(arr[i]);
  }

  return newArr;
};

module.exports = steamrollArray1;
steamrollArray1([1, [2], [3, [[4]]]]);

// //////////////////////////////
