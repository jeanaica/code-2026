/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const accountValue = accounts.map((value) => {
    let a = 0;

    value.forEach((item) => {
      a += item;
    });

    return a;
  });

  const maxValue = Math.max(...accountValue);

  return maxValue;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
