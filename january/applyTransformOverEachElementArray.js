/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let newArray = [];
  arr.forEach((curr, index, array) => newArray.push(fn(curr, index, array)));
  return newArray;
};

console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  })
);

console.log(
  map([1, 2, 3], function plusI(n, i) {
    return n + i;
  })
);

console.log(
  map([10, 20, 30], function constant(n, i) {
    return 42;
  })
);
