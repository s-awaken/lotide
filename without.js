const without = function(array1, array2) {
  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    const found = array2.find((ele) => ele === array1[i]);
    if (!found) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
};

module.exports = without;