const words = ["ground", "control", "to", "major", "tom"];
const eqArrays = function(Array1,Array2){
  farz = true;
  if (Array1.length !== Array2.length) {
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
  if (eqArrays(firstArr,secondArr) === false ) {
    console.log(`⚡️⚡️ Assertion Failed: ${firstArr} !==  ${secondArr}`);
  } else {
    console.log(`✅✅ Assertion Passed: ${firstArr} ===  ${secondArr}`);
  }
};
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
assertArrayEqual(map([1,2,3],(x) => x * x),[1,4,9]);




