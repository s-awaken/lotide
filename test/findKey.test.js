const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", ()=>{
  
  it("should return 'noma', when passed {key1: 1, key2: 2}", () =>{
    const object = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callback = (n) => {
      n.stars === 2;
    };
    findKey(object, callback);
  });
});