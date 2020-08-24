const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  
  it("should return '{t:[0], r:[1], u:[2], e:[3]}' when passed 'true'", () =>{
    const word = 'true';
    const actual = letterPositions(word);
    const expected = {t:[0], r:[1], u:[2], e: [3]};
    assert.deepEqual(actual, expected);
  });
});