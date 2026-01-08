/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  const newReversed = [...functions].reverse();

  return function (x) {
    let value = x;

    newReversed.forEach((reversed) => {
      value = reversed(value);
    });

    return value;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
