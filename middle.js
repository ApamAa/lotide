const eqArrays = function(Array1,Array2){
  farz = true;
  if (Array1.length !== Array2.length){
      farz = false;
  } else {
      for (i=0; i<Array1.length;i++)
      if (Array1[i]!==Array2[i]) {
          farz = false;
        
      }
  
  }
  return farz;
};
const assertArrayEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr,secondArr) === false ){
      console.log(`⚡️⚡️ Assertion Failed: ${firstArr} !==  ${secondArr}`);
  }else {
      console.log(`✅✅ Assertion Passed: ${firstArr} ===  ${secondArr}`);
  }
};
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
assertArrayEqual(middle([1, 2]),[]);// => [2]
assertArrayEqual(middle([1, 2, 3, 4]),[2,3]);