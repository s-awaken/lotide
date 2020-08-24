const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("should return [2], when passed {key1: 1, key2: 2}, [2]", ()=>{
    const object = {key1: 1, key2: 2};
    const value = 2;
    const actual = findKeyByValue(object, value);
    const expected = 'key2';
    assert.equal(actual, expected);
  });
});