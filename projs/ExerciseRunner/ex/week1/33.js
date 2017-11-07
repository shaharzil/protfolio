'use strict';
console.log('Ex 33');

// Read 2 names and print the longer one

var name1 = prompt ('name?');
var name2 = prompt ('name?');
var num1 = name1.length;
var num2 = name2.length;
var biggerName = (num1 > num2)? name1 : name2;
console.log('The bigger number is: ' + biggerName);