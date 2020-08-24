const findKeyByValue = function(objects, value) {
  for (const object in objects) {
    if (objects[object] === value) {
      return object;
    }
  }
};
module.exports = findKeyByValue;