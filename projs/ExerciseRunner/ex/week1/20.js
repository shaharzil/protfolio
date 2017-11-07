'use strict';
console.log('Ex 20');

// 0. Read 10 numbers and print:
// o The maximum number
// o The minimum number
// o The average

var sum = 0;
var min = Infinity;
var max = -Infinity
var avg = sum / i

for (var i = 0; i < 10; i++) {
    var num = +prompt("num?");
    if (num > max) max = num
    else min = num
    sum += num
}

console.log('max: ' + max + ' min: ' + min + ' avg: ' + avg)