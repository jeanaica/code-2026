/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let currentNum = num;
  let steps = 0;

  while (currentNum != 0) {
    if (currentNum % 2 === 0) {
      currentNum = currentNum / 2;
      steps++;
    } else {
      currentNum = currentNum - 1;
      steps++;
    }
  }

  return steps;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
console.log(numberOfSteps(0));
