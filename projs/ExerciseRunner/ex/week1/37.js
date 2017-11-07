'use strict';
console.log('Ex 37');

// Read a string and print it backwards using loop

var str = prompt('Enter a word: ');
var backStr = '';

for (var i = 0; i < str.length; i++) {
    var strLastChar = str.substr(str.length - (i + 1), 1);
    backStr += strLastChar
}

console.log('The backwards word: ' + backStr);
