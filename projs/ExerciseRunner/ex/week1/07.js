'use strict';
console.log('Ex 7');

// Read 3 numbers and check if the 3rd is the sum of the first two, if so, print all
// numbers to the console like this: 6 + 4 = 10

var num1 = +prompt('Choose a number');
var num2 = +prompt('Choose a number');
var num3 = +prompt('Choose a number');

if (num1 + num2 === num3){
    console.log(num1 + ' + ' + num2 + ' = ' + num3);
}

