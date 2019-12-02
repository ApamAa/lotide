const eqArrays = require('../eqArrays');
const tail = require('../tail');

eqArrays(tail([1,,3,4,5]),[2,3,4,5]);

eqArrays(tail([2,4,6,8]),[4,6,8]);
eqArrays(tail([45,24,30,95,95]),[24,30,95,95]);