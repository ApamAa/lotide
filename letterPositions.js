const eqArrays = function(Array1,Array2) {
  let farz = true;
  if (Array1.length !== Array2.length) {
    farz = false;
  } else {
    for (let i = 0; i < Array1.length; i++)
      if (Array1[i] !== Array2[i]) {
        farz = false;
        
      }
  
  }
  return farz;
};
const assertArrayEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr,secondArr) === false) {
    console.log(`⚡️⚡️ Assertion Failed: ${firstArr} !==  ${secondArr}`);
  } else {
    console.log(`✅✅ Assertion Passed: ${firstArr} ===  ${secondArr}`);
  }
};


const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== " ") {
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i];
      }
    }
  }

  return results;

};

console.log(letterPositions("hello"));

assertArrayEqual(letterPositions("hello").e, [1]);