const eqArrays = function (array_1, array_2) {
  let equal = true;
  for (let i = 0; i < array_1.length; i++) {
    if (array_1[i] !== array_2[i]) {
      equal = false;
    }
  }
  return equal;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArrayEqual([1, 2, 3], [1, 3, 3]));
