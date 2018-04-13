const uniteUnique = (...oriArr) => {
  const arr = oriArr.reduce((acc, cur) => acc.concat(cur));
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    // if(i == arr.length - 1) break;

    const x = newArr.reduce((acc, cur) => {
      if (cur === arr[i]) return acc && false;
      return acc;
    }, true);

    if (x) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

module.exports = uniteUnique;

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
