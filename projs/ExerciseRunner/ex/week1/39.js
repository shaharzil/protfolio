'use strict';
console.log('Ex 39');


// write a function myIndexOf(str, searchStr) that accepts 2 strings,
// and returns the location of the second string in the first, if not found
// return -1


var str1 = prompt('Plase enter a word');
var str2 = prompt('Plase enter a word');


function myIndexOf(str, searchStr) {
    var index = ''
    if (str.indexOf(searchStr) !== -1) {
        var firsrCharIndex = str.indexOf(searchStr[0])
        var lastCharIndex = str.indexOf(searchStr[searchStr.length - 1])
        index += firsrCharIndex + ' - ' + lastCharIndex;
    } else {
        index += str.indexOf(searchStr)
    }
    return index;
}



console.log('The location om the second string in the first is: ' + myIndexOf(str1, str2))
