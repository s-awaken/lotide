const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObject", () => {
  
  it("should return true, when passed {}, {}", ()=>{
    const object1 = {};
    const object2 = {};

    const actual = eqObjects(object1, object2);
    const expected = true;

    assert.equal(actual, expected);
  });

  it("should return false, when passed {key1: 1}, {key1: 2}", ()=>{
    const object1 = {key1: 1};
    const object2 = {key1: 2};

    const actual = eqObjects(object1, object2);
    const expected = false;

    assert.equal(actual, expected);
  });
  it("should return true, when passed {key1: 1}, {key1: 1}", ()=>{
    const object1 = {key1: 1};
    const object2 = {key1: 1};

    const actual = eqObjects(object1, object2);
    const expected = true;

    assert.equal(actual, expected);
  });
  it("should return false, when passed {key1: 1, key2: 2}, {key1: 2}", ()=>{
    const object1 = {key1: 1, key2: 2};
    const object2 = {key1: 2};

    const actual = eqObjects(object1, object2);
    const expected = false;

    assert.equal(actual, expected);
  });
});