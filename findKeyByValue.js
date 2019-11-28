let emoji = require('node-emoji');
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji.emojify(':white_check_mark:') + ` Assertion Passed :  ${actual}   ===   ${expected}`);
  } else {
    console.log(emoji.emojify(':red_circle:') + ` Assertion Failed : ${actual}  !==  ${expected}`);
  }

};
const findKeyByValue = function(object,value) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
  return;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(Object.keys(bestTVShowsByGenre));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
