const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", ()=>{
  
  it("should return [], when passed [1]", ()=>{
    const input = [];

    assert.deepEqual(middle(input), []);
  });
  
  it("should return [3] when passed [1, 3, 2]", ()=>{
    const input = [1, 3, 2];
    assert.deepEqual(middle(input), [3]);
  });

  it("should return [", ()=>{
    const input = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(middle(input), [3, 4]);
  });
});
