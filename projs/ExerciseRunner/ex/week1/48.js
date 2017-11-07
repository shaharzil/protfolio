'use strict';
console.log('Ex 48');



// Write a function that gets 2 arrays and returns a sumNums array:
// a. For example, for: [1, 4, 3] [2, 5, 1, 9] it returns: [3, 9, 4, 9]
// b. Read those arrays from the user (until 999 is entered)
// TIP: write a function: getArrayFromUser and call it twice

var nums1 = getArrayFromUser('first')
var nums2 = getArrayFromUser('second')

console.log('Original arrays: ' + nums1 + 'and: ' + nums2)
console.log('The sum nums: ' + sumNumsArrays(nums1, nums2))

function getArrayFromUser(order) {
    var newArray = [];
    var userNum = +prompt('Enter nums for the ' + order + ' array, press 999 when it enough');
    while (userNum !== 999) {
        newArray.push(userNum);
        userNum = +prompt('Enter nums for the ' + order + ' array, press 999 when it enough');
    }
    return newArray;
}


function sumNumsArrays() {
    var bigerArray = 0;
    var sumNums = [];
    (nums1 > nums2) ? bigerArray = nums1.length : bigerArray = nums2.length;
    var diff = Math.abs(nums1.length - nums2.length)
    for (var j = 0; j < diff; j++) {
        (nums1 > nums2) ? nums2.push(0) : nums1.push(0)

    }
    for (var i = 0; i < bigerArray; i++) {
        sumNums.push(nums1[i] + nums2[i])
    }
    return sumNums;
}

