const without = function (array_1, array_2) {
  const newArray = [];
  for (let i = 0; i < array_1.length; i++) {
    const found = array_2.find((ele) => ele === array_1[i]);
    if (!found) {
      newArray.push(array_1[i]);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
