const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  const newArray = [];
  const midIndex = Math.floor(array.length / 2);
  if (Number.isInteger(array.length / 2)) {
    newArray.push(array[midIndex - 1], array[midIndex]);
  } else {
    newArray.push(array[midIndex]);
  }
  return newArray;
};
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4])
