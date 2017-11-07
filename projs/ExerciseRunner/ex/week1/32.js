'use strict';
console.log('Ex 32');

// Write A function that generates a random number between 0 and max (Parameter)

var userNum = +prompt(' Enter your max number');
console.log('random number between 0 to ' + userNum + ' is: ' + getRand(userNum));

function getRand(max) {
    var res = Math.floor(Math.random() * (max + 1));
    return res;
}


