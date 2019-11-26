let emoji = require('node-emoji');
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji.emojify(':white_check_mark:') + ` Assertion Passed :  ${actual}   ===   ${expected}`);
  } else {
    console.log(emoji.emojify(':red_circle:') + ` Assertion Failed : ${actual}  !==  ${expected}`);
  }

};
const head = function(Array) {
  if (Array.length === 0) {
    output = undefined;
  } else {
    output = Array[0];
  }
  return output;
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
