// function takeUntil do ta argument migire ke yekish arayast yekisham khodesh function e callback e,aval ye variebel tarif mikonam ke mosavi ye araye khalie,bad ye for loop ke bere begarde too kole araye,bad tooye for ye if ,ke bebine va function ro check kone,ta ta zamani ke function be un araye nareside ,yani un ke madde nazareshe va mikhad taaa sare unja berese va age un bood dge edame nade ,item e arayaro push(ezafe) mikone be araye khali,vagarna mire else va too else return mishe be araye khali va miad biroon.dalile in ke return ro nabordim biroone bezarim in bood ke mikhaym ta shart bar qarar shod biad biroon az function,chon nemikhaym ta tah bere faghat ta sharte function.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const takeUntil = function(array, checkFunc) {
  let NewList = [];
  for(i =0; i < array.length; i++) {
    if(!checkFunc(array[i])) {
      NewList.push(array[i]);
    } else {
      return NewList;
    }
  } 
};
// ina ke tooye argument e dovome takeuntil hast khodesh ye function e ke hamoon call back e
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
