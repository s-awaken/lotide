const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () =>{
  
  it("should return {Fang: 2, Jason: 1} when passed ([Fang, Jason, Karima, Fang], {Fang:true, Jason: true, Karima: false})", () => {
    const allItems = ['Fang', 'Jason', 'Karima', 'Fang'];
    const itemsToCount = {Fang: true, Jason: true, Karima: false};

    const actual = countOnly(allItems, itemsToCount);
    const expected = {Fang: 2, Jason: 1};
    assert.deepEqual(actual, expected);
  });
});