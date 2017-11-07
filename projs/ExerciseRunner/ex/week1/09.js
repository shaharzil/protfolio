'use strict';
console.log('Ex 9');

// Read 2 positive numbers and calculate the difference (absolute value) 
// o If the diff is smaller from both values say that those numbers
// are relatively-close (i.e. – num1=5, num2=9 then diff=4 => relatively-close!)
// o Validate that you got numbers
// (hint: search for something like: javascript check if number)

var num1 = +prompt('num?');
var num2 = +prompt('num?');
var diff = Math.abs(num1 - num2);

if ((diff < num1) && (diff < num2)) console.log('Numbers are reletively close!')
if (isNaN(num1) || isNaN(num2)) console.log('please enter numbers only next time')