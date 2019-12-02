

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

module.exports = eqArrays;

