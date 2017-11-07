'use strict';
console.log('Ex 28');

var num1 = +prompt('num?')
var num2 = +prompt('num?')
var gcd = num1;

while (num1 != num2) {
    if (num1 > num2) {
        num1 -= num2;
    } else {
        num2 -= num1;
    }
}
console.log(gcd);


