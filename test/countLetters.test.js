const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", ()=>{
  
  it("should return {t: 1, r: 1, u: 1, e: 1} when passed 'true'.", ()=>{
    const input = 'true';
    const output = {
      t: 1,
      r: 1,
      u: 1,
      e: 1
    };
    assert.deepEqual(countLetters(input), output);
  });
  it("should return {y: 1, e: 1, s: 1} when passed 'yes'.", ()=>{
    const input = 'yes';
    const output = {
      y: 1,
      e: 1,
      s: 1
    };
    assert.deepEqual(countLetters(input), output);
  });
  it("should return {s: 1, y: 2, r: 1, m: 1} when passed 'syrym'.", ()=>{
    const input = 'syrym';
    const output = {
      s:1,
      y: 2,
      r: 1,
      m: 1
    };
    assert.deepEqual(countLetters(input), output);
  });
});