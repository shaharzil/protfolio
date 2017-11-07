'use strict';
console.log('Ex 22');

// Write the function myPow that gets 2 params: base, exp and returns the power

function myPow(base, exp) {
    var num = 1;
    for (var i = 0; i < exp; i++) {
        num *= base;
    }
    return num;
}

var power = myPow(2, 4);
console.log('The power is: ' + power);