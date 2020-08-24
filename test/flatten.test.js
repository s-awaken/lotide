const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  
  it("should return [1,2,3] when passed [1,[2,3]]", () => {
    const array = [1,[2,3]];
    const actual = flatten(array);
    const expected = [1,2,3];
    assert.deepEqual(actual, expected);
  });
});