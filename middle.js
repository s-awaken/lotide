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
module.exports = middle;