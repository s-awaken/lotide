const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe("#assertObjectEqual", ()=>{
  
  it("should return true when passed {}, {}", ()=>{
    const input = {};
    const output = {};
    assertObjectsEqual(input, output);
  });

  it("should return true when passed {key: value}, {key: value}", ()=>{
    const input = {"key": "value"};
    const output = {"key": "value"};
    assertObjectsEqual(input, output);
  });
  
  it("should return true when passed {key1: value2, key2: value1}, {key1: value2, key2: value1}", ()=>{
    const input = {key1: 'value2', key2: 'value1'};
    const output = {key1: 'value2', key2: 'value1'};
    assertObjectsEqual(input, output);
  });
  
});