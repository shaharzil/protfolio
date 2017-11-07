'use strict';
console.log('Ex 43');


// Write a function biggerThan100 that gets an array of nums and returns
// an array of items that are bigger than 100.


var nums = [234 , 34 , 654 , 101 , 3 , 45 , 234]

function biggerThan100 () {
    var validNums = []
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 100) validNums.push(nums[i])
    }
    return validNums
}

console.log(biggerThan100())