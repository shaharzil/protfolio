'use strict';
console.log('Ex 30');

// Not fhinished!


// .Read a number and Calculate sum of its digits. o
// Calculate multiply of its digits. o
// Print it with swapped first and last digits (2731 => 1732) o
// Check if its symmetric (such as: 95459) o
// Print its reverse (BONUS: as number not as string). o
// and last digit. Sum its first o
// Print if it's an Armstrong number. o
// i.e. 371 is an Armstrong number:
// 33 + 73 + 13 = 371
// Print if it's a perfect number. o
// Perfect number is number that sum of all his dividers is the
// number itself.
// i.e. 6 is a perfect number (1 + 2 + 3).
// and prints all Armstorng and Perfect max Now read a number:
// max positive numbers until



// Check if its symmetric (such as: 95459)


function CheckSymmetric(num){
    var strNum = '';
    strNum += num;
    var leftDigit = 0;
    var rightDigit= (strNum.length)-1;
    
    for(;leftDigit < rightDigit ; leftDigit++ , rightDigit--){
        if (strNum.charAt(leftDigit) !== strNum.charAt(rightDigit)) {
            return false;
        }
    } 
    return true;
}







// Print it with swapped first and last digits

var num = +prompt('num?');
var  swapNum = '';

while (num > 0) {
    var rightDigit = num % 10;
    num = parseInt(num / 10);
    swapNum += rightDigit;
}
console.log (swapNum);





// Calculate multiply of its digits.

var num = +prompt('num?');
var multi = 1

while (num > 0) {
    var rightDigit = num % 10;
    num = parseInt(num / 10)
    multi = multi * rightDigit;
}
console.log(multi);






// Calculate sum of its digits.

var num = +prompt('num?'); 265
var sum = 0

while (num > 0) {
    var rightDigit = num % 10;
    num = parseInt(num / 10)
    sum += rightDigit;
}
console.log(sum);