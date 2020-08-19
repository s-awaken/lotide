const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  return eqObjects(actual, expected)
    ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};
const eqObjects = function (object1, object2) {
  return Object.keys(object1).every((key) => object1[key] === object2[key])
    ? Object.keys(object2).every((key) => object1[key] === object2[key])
    : false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc));
