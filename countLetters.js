let emoji = require('node-emoji');
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji.emojify(':white_check_mark:') + ` Assertion Passed :  ${actual}   ===   ${expected}`);
  } else {
    console.log(emoji.emojify(':red_circle:') + ` Assertion Failed : ${actual}  !==  ${expected}`);
  }

};
const countLetters = function(allLetters) {
  let results = {};
  for (let character of allLetters) {
  
    if (results[character]) {
      results[character] += 1;
    } else {
      results[character] = 1;
    }
  }
   

  return results;

};

const text = "lighthouse in the house";
const results = countLetters(text);
assertEqual(results['i'], 2);
assertEqual(results['f'], undefined);
assertEqual(results['e'], 3);