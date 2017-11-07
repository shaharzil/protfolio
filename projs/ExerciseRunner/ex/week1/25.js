'use strict';
console.log('Ex 25');

multiplicationTable();

function multiplicationTable() {
    var str = '';

    for (var i = 1; i <= 10; i++) {
        for (var t = 1; t <= 10; t++) {
            str += i * t + " ";
        }
        console.log(str);
        str = '';
    }
}
