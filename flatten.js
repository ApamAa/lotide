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
const flatten = function(array_of_arrays){
  output = [];
  for (i=0;i<array_of_arrays.length;i++){
      if (array_of_arrays[i].length > 0){
          for (j=0;j<array_of_arrays[i].length;j++){
          output.push(array_of_arrays[i][j]);
          }
      } else {
          output.push(array_of_arrays[i]);
      }
  }
  return output;

};
//console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);