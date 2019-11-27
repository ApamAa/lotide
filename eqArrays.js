let emoji = require('node-emoji');
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji.emojify(':white_check_mark:') + ` Assertion Passed :  ${actual}   ===   ${expected}`);
  } else {
    console.log(emoji.emojify(':red_circle:') + ` Assertion Failed : ${actual}  !==  ${expected}`);
  }

};
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
}



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);