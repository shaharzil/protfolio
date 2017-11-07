'use strict';
console.log('Ex 19');

// Read 10 numbers from the users and output "the number is even" if this is
// the case, else "the number is not even"

for (var i = 0; i < 10; i++) {
    var num = +prompt('num?');
    var even = (num % 2 === 0);
    if (even) {
        console.log ('The number: ' + num + ' is even');
    } else {
        console.log ('The number: ' + num + ' is not even');
    }
}