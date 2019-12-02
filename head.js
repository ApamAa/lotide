const assertEqual = require('./assertEqual');

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
