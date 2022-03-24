// 2.24 Write a counter function that returns an object containing 2 functions that implement
// an up/down counter, hiding the counter
// var obj = counter(10);
// var up = obj.up;
// var down = obj.down();

// up(); // 11
// down(); // 10
// down(); // 9
// up(); // 10

function counter(num) {
  return {
    up() {
      num += 1;
      return num;
    },
    down() {
      num -= 1;
      return num;
    },
  };
}

module.exports = counter;
// const obj = counter(10);
// const up = obj.up;
// const down = obj.down;
// console.log(down());
// console.log(up());
// console.log(up());
// console.log(up());
// console.log(down());
// console.log(down());
