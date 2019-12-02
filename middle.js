const eqArrays = require('./eqArrays');
var middle = function(arraye) {
  let middleIndex = Math.floor((arraye.length-1)/2);
  let mian = [];
  if(arraye.length > 2){
    if(arraye.length % 2 === 0) {
    mian = arraye.slice(middleIndex,middleIndex+2);
    } else {
      mian = arraye[middleIndex];
    }
  }
  return mian;
};
module.exports = middle;
