const eqArrays = require('./eqArrays');
const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr,secondArr) === false ){
      console.log(`⚡️⚡️ Assertion Failed: ${firstArr} !==  ${secondArr}`);
  }else {
      console.log(`✅✅ Assertion Passed: ${firstArr} ===  ${secondArr}`);
  }
};
module.exports = assertArraysEqual