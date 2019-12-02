
/*const tail = function(Array) {
  let output = [];
  for (let i = 1; i < Array.length; i++) {
    output.push(Array[i]);
  }
  return output;
};
console.log(tail[1,2,5,6,3]);*/
const tail = function(array) {
let exceptFirst = array.slice(1); 
  return exceptFirst;
}

module.exports = tail;