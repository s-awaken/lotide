const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", ()=>{
  
  it("should return ['Labs'] when passed ['Lighthouse', 'Labs']", ()=>{
    const input = ["lighthouse", "Labs"];
    assert.deepEqual(tail(input), ["Labs"]);
  });

  it("should return [1] when passed [2, 3, 1]", ()=>{
    const input = [2, 3, 1];
    assert.deepEqual(tail(input), [3, 1]);
  });

  it("should return ['Bootcamp'] when passed ['Lighthouse', 'Labs', 'Bootcamp']", ()=>{
    const input = ["lighthouse", "Labs", "Bootcamp"];
    assert.deepEqual(tail(input), ["Labs", "Bootcamp"]);
  });
});