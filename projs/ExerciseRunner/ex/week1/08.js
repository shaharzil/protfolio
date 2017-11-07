'use strict';
console.log('Ex 8');

// Read 3 numbers and print the smallest

var num1 = +prompt('Choose a number');
var num2 = +prompt('Choose a number');
var num3 = +prompt('Choose a number');

if ((num1 < num2) && (num1 < num3)) {
console.log ('The smallest number is: ' + num1);
}

if ((num2 < num3) && (num2 < num1)){
    console.log ('The smallest number is: ' + num2);
}

if ((num3 < num2) && (num3 < num1)){
    console.log ('The smallest number is: ' + num3);  
}