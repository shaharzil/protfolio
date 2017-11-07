'use strict';
console.log('Ex 41');

// Write a function that gets a comma ',' delimited string that consists of names. Ex: 'igal,moshe,haim'
// and returns who has the longest name, and the shortest name.
// Tip: use the split function to covert a string to an array


// unfhinished, need to show smallest

function getLongest(str) {
    var longestStr = '';
    var shortStr = Infinity;
    var res = '';
    if (str.indexOf(',') === -1) console.log('Whare is the cooma?');
    else {
        str = str.split(',');
        for (var i = 0; i < str.length; i++) {
            if (str[i].length > longestStr.length) {
                longestStr = str[i];
                res += 'Longest str is: ' + str[i];
            } else if (str[i].length === longestStr.length) {
                res += ' and: ' + str[i];
            } else if (str[i].length < shortStr.length) {
                shortStr = str[i];
                res += 'Shortest str is: ' + str[i];
            } else if (str[i].length === shortStr.length) {
                res += ' and: ' + str[i];
            }
        }
    }
    return res;
}


var userStr = prompt('Write some names with a comma between each word')

console.log(getLongest(userStr));