let emoji = require('node-emoji');
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji.emojify(':white_check_mark:') + ` Assertion Passed :  ${actual}   ===   ${expected}`);
  } else {
    console.log(emoji.emojify(':red_circle:') + ` Assertion Failed : ${actual}  !==  ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
module.exports = assertEqual;
