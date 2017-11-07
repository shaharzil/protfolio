'use strict';
console.log('Ex 27');


var num = Math.random() * (1000 - 0) +0;
console.log(num);

for (var i = 0; i < 9; i++) {
    num = Math.random() * (num + 1000 - num) + num;
    console.log(num);
}

