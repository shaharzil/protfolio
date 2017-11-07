'use strict';
console.log('Ex 16');

// Write a function isEven that gets a number, and returns true if the number is
// even otherwise false.

function isEven(num) {
    var even = (num % 2 === 0);
    return even;
}

var userNum = +prompt('num?')
var evenNum = isEven(userNum);
console.log('Is even? ' + evenNum);