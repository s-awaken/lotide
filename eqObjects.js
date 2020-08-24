const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  if (keys.length !== Object.keys(object2).length) {
    return false;
  }
  return keys.every(k => eqObjects(object1[k], object2[k]));
};

module.exports = eqObjects;