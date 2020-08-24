const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", ()=>{
  
  it("should return true when passed [1, 2], [1, 2]", ()=>{
    const array1 = [1, 2];
    const array2 = [1, 2];
    assert.equal(eqArrays(array1, array2), true);
  });
  it("should return false when passed [1, 3], [1, 2]", ()=>{
    const array1 = [1, 3];
    const array2 = [1, 2];
    assert.equal(eqArrays(array1, array2), false);
  });
  it("should return false when passed [1, 2, 3], [1, 2]", ()=>{
    const array1 = [1, 2, 3];
    const array2 = [1, 2];
    assert.equal(eqArrays(array1, array2), false);
  });
});