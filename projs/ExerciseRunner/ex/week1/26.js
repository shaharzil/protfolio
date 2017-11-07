'use strict';
console.log('Ex 26');


var num = parseInt(Math.random() * 100) + 1;
console.log(num);
var userNum = +prompt('num?');

while (userNum !== num) {
    if (userNum < num) console.log ('Too low');
    else console.log ('Too high')
    userNum = +prompt('num?');
}

console.log ('done!')