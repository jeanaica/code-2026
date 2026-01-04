/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const sequence = Array.from({ length: n }, (_, index) => {
    const activeIndex = index + 1;

    switch (true) {
      case activeIndex % 3 === 0 && activeIndex % 5 === 0:
        return "FizzBuzz";
      case activeIndex % 3 === 0:
        return "Fizz";
      case activeIndex % 5 === 0:
        return "Buzz";
      default:
        return `${activeIndex}`;
    }
  });

  return sequence;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
