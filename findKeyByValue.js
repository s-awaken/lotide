const findKeyByValue = function (objects, value) {
  for (const object in objects) {
    if (objects[object] === value) {
      return object;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const assertEqual = function (actual, expected) {
  //Start assertion
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

console.log(
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
);
console.log(
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
);
