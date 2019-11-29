// function findkey do ta argument migire ke yekish objecte yekisham function e callback,ke esmesho gozashtam funckey, mesle code ghabli, yek variable tarif kardam b esme keys ,bad methode object.keys tamame key haye object ro mirize dar variable keys,bad dobare mesle code ghabli,ye forloop too keys anjam midim bad shart mizarim ba estefade az callback function,agaaaar funckey atgumentesh object dar key bood,ke key ro return kone, bad ye return dar akhar mizarim ke age peida nakard undefined kone,
const findKey = function(object,funckey) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (funckey(object[key]))
    
      return key  
  }
  return;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

