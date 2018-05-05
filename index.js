function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i = 0; i < 4; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray;
}

function johnLennonFacts(facts) {
<<<<<<< HEAD
  let countdown = facts.length - 1;
  var factsArray = [];
  while (countdown > -1) {
    factsArray.unshift(facts[countdown] + "!!!");
    --countdown;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    num++
  } while (num < 15);
  return myArray;
=======
  let countdown = facts.length;
  var factsArray = [];
  while (countdown > 0) {
    factsArray.push(facts[i] + "!!!");
    --countdown;
  }
  return factsArray;
>>>>>>> 54b6d82f29cd196b041be81f48ac10b6b556d6bf
}