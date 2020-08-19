const eqObjects = function (object1, object2) {
  return Object.keys(object1).every((key) => object1[key] === object2[key])
    ? Object.keys(object2).every((key) => object1[key] === object2[key])
    : false;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));
