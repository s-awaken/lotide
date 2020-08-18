const eqArrays = function (array_1, array_2) {
  let equal = true;
  for (let i = 0; i < array_1.length; i++) {
    if (array_1[i] !== array_2[i]) {
      equal = false;
    }
  }
  return equal;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
