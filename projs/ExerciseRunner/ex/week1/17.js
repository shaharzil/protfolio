'use strict';
console.log('Ex 17');

// Write a function getBigger that receives 2 numbers and returns the bigger. 

function getBigger(num1, num2) {
    if (num1 < num2) return num2
    else return num1;
}

var userNum1 = +prompt('num?')
var userNum2 = +prompt('num?')
var biggerNum = getBigger(userNum1, userNum2);
console.log(biggerNum);