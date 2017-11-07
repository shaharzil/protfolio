'use strict';
console.log('Ex 31');


var userNum = +prompt('Please enter a number');
var now = null;

function myAbs(num) {
    return num = (num < 0) ? -1 * num : num;
}

var myStartTime = Date.now();
for (var i = 0; i < 1000000; i++) {
    myAbs(userNum);
}
var myEndTime = Date.now();

var funcStartTime = Date.now();
for (var i = 0; i < 1000000; i++) {
    Math.abs(userNum);
}
var funcEndTime = Date.now();

console.log('my function time: ' + (myEndTime - myStartTime) + ' milliseconds');
console.log('original function time: ' + (funcEndTime - funcStartTime) + ' milliseconds');
