'use strict';
console.log('Ex 6');

// Read a, b, c from the user, (for example: 2, -5, 2)
// your output should be something like:
// 2x2 – 5x + 2 = 0
// x1 = 2 ; x2 = 0.5

var a = +prompt('Choose a number');
var b = +prompt('Choose a number');
var c = +prompt('Choose a number');

Math.sqrt(4)

var x1 = (-b + Math.sqrt(b * b -( 4 * a * c))) / (2 * a);
var x2 = (-b - Math.sqrt(b * b -( 4 * a * c))) / (2 * a);

console.log(a + 'x\u00B2' + '+' + b + 'x' + '+' + c + '=' + 0);
console.log( 'x1 = ' + x1 + ' , ' + "x2 = " + x2) 