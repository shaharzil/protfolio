'use strict';
console.log('Ex 42');


// Write a function: generatePass(passLength) that generates a
// password of a specified length. Password is made out of random singledigit
// numbers.


function generatePass(passLength) {
    var pass = '';
    for (var i = 0; i < passLength; i++) {
        pass += parseInt(Math.random() * 10)
    }
    return pass
}

console.log(generatePass(7))