'use strict';
console.log('Ex 38');

// VOWELS (aoieu) 
// o write a function that gets a str and print how many times each vowel appears
// o Read a str and make the vowels lowercase, the others uppercase (GiZiM GiDoo)
// o Write a function that reads a str and double all the vowel in it

var str = prompt('Enter a word')

function getVowels(char) {
    str = str.toLowerCase()
    var vowelsCount = 0;
    for (var i = 0; i <= str.length - 1; i++) {
        if (str.charAt(i) === char) vowelsCount++;
    }
    return vowelsCount;
}

var aCount = ' a: ' + getVowels('a') + ('\n')
var oCount = ' o: ' + getVowels('o') + ('\n')
var iCount = ' i: ' + getVowels('i') + ('\n')
var eCount = ' e: ' + getVowels('e') + ('\n')
var uCount = ' u: ' + getVowels('u') + ('\n')

console.log('This is how many times each vowel apeared in the word - ' + str + ': \n' + aCount + oCount + iCount + eCount + uCount)



function getVowelsCase() {
    var res = '';
    var strChar = '';
    str = str.toUpperCase();
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'A' || str.charAt(i) === 'O' || str.charAt(i) === 'I' || str.charAt(i) === 'E' || str.charAt(i) === 'U') {
            var strChar = str.charAt(i)
            strChar = strChar.toLowerCase()
            res += strChar
        } else {
            var strChar = str.charAt(i)
            res += strChar
        }
    }
    return res;
}

console.log('String with lowcase vowels: ' + getVowelsCase())




function getVoweDouble() {
    var res = '';
    var strChar = '';
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'a' || str.charAt(i) === 'o' || str.charAt(i) === 'i' || str.charAt(i) === 'e' || str.charAt(i) === 'u') {
            var strChar = str.charAt(i)
            res += strChar + strChar;
        } else {
            var strChar = str.charAt(i)
            res += strChar
        }
    }

    return res;
}

console.log('String with double vowels: ' + getVoweDouble())