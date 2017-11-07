'use strict';
console.log('Ex 34');

// read a string and print:
// Its length 
// Its first and last chars 
// uppercase and lowercase in 


function getStrInfo(str) {
    console.log('The string length is: ' + str.length + ' chars')
    console.log('The first Charter is: ' + str[0] + ', and the last charter is: ' + str[str.length - 1]);
    console.log('String in uppercase: ' + str.toUpperCase() + ', string in lowcase: ' + str.toLowerCase())
}

var userStr = prompt('Choose a word');
getStrInfo(userStr)