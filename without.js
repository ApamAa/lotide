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
const without = function(source,itemsToRemove){
  let output = [];
  
      for (var i =0; i< source.length;i++){
          isunique = true;
          for (var j =0 ; j < itemsToRemove.length; j ++){
              if (source[i] === itemsToRemove[j])
              isunique = false
          }
          if (isunique){
              output.push(source[i]);
          }
      }
  return output;
  };

  assertArrayEqual(without([1, 2, 3], [1]),[2,3]); // => [2, 3]
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]),["1",'2']); // => ["1", "2"]