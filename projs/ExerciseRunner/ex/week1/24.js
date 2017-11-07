'use strict';
console.log('Ex 24');

// ex 23 in the new pdf
// Write the function factorial that gets a number n and return n!

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

var factNum = factorial (5)
console.log (factNum)