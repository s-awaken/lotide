const eqArrays = function(array1, array2) {
  return Array.isArray(array1) && Array.isArray(array2) && array1.length === array2.length ?
    array1.every((a, b) => (eqArrays(a, array2[b]))) :
    (array1 === array2);
  
};

module.exports = eqArrays;