const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns '[3,4,5]' for [1,3,4,5]", () => {
    assert.deepEqual(tail([1,3,4,5]), [3,4,5]);
  });
  it("returns '[4,6,8]' for [2,4,6,8]", () => {
    assert.deepEqual(tail([2,4,6,8]), [4,6,8]); 
  });
});





