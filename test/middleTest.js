//const assertArraysEqual = require('../assertArraysEqual');
//const middle = require('../middle');
const assert = require('chai').assert;
const middle   = require('../middle');
describe("#middle", () => {
  it("returns   for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]),[]);
  });
  it("returns '[2,3]' for ['[1,2,3,4']", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]); 
  });
})
