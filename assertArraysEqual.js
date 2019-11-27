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
assertArrayEqual([3,3,3],[3,3,3]);