let emoji = require('node-emoji');
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji.emojify(':white_check_mark:') + ` Assertion Passed :  ${actual}   ===   ${expected}`);
  } else {
    console.log(emoji.emojify(':red_circle:') + ` Assertion Failed : ${actual}  !==  ${expected}`);
  }

};

const eqArrays = function(Array1,Array2) {
  let farz = true;
  if (Array1.length !== Array2.length) {
    farz = false;
  } else {
    for (let i = 0; i < Array1.length; i++) {
      if (Array1[i] !== Array2[i]) {
        farz = false;
      }
    }
  }
  return farz;
};


const eqObjects = function(object1, object2) {
  let object1keys = Object.keys(object1);
  let object2keys = Object.keys(object2);
  if (object1keys.length !== object2keys.length) {
    return false;
  }
  
  for (let key of object1keys) {
    // check kon bebin value tuye object array hastesh ya na. age array bashe bayad az dasture eqArrays estefade konim ta moghayese kone va === dige kar nemikone. khoriie eqArrays true ya false be surate boolean hastesh
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else {
      // age value array nabud, dige mishe ba === meghdaresh ro moghayese kard beyne dota object
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd,cd2),false); // => false