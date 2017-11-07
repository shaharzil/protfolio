'use strict';
console.log('Ex 46');


// Write a function sayNum(num) that prints each digit in words.
// For example:
// 123 => One Two Three.
// 7294 => Seven Two Nine Four
// TIP: You may use Switch inside a loop OR an array digitNames.
// What the heck, try them both.


var userNum = prompt('Write a number')
var digitNames = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']

function sayNum(strNum) {
    var DigitName = ''
    for (var i = 0; i < strNum.length; i++) {
        DigitName += digitNames[strNum[i]] + ' '
    }
    return DigitName
}

console.log(sayNum(userNum))