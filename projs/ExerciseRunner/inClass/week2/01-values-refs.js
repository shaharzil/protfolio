console.log('Values vs. References');

var num1 = 98;
var num2 = num1;
num1 = 100;
// console.log('num1: ', num1);
// console.log('num2: ', num2);

// var nums2 = nums1;
// var nums3 = nums1.slice()
// nums2.push(999);

// console.log('nums1: ', nums1);
// console.log('nums2: ', nums2);

var nums1 = [101, 102, 103];
var items1 = nums1;

// var arr = mySlice(nums1, 0, 0);
// console.log('mySlice expected: [] got: ', arr);

// arr = mySlice(nums1, 0, 2);
// console.log('mySlice expected: [101, 102] got: ', arr);


function mySlice(items, idxStart, idxEnd) {
    var resItems = []
    for (var i = idxStart; i < idxEnd; i++) {
        var item = items[i];
        resItems.push(item);
    }
    return resItems;   
}

// Write a function: findUniques(nums)
// the array nums contains numbers
//  in the range 0 -10 such as:
// 5	4	5	7	1	9	4
// the function returns a new array 
// where each value appear only once.

function findUniques(nums) {
    // Step 1 - count the appearcnce of each num
    var counts = [];
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (!counts[num]) {
            counts[num] = 0;
        }
        counts[num]++;
    }
    var uniques = [];
    for (var i = 0; i < counts.length; i++) {
       if ( counts[i] > 0 ) {
        uniques.push(i);
       }
        
    }
    return uniques;
}


function findUniques1(nums) {
    var uniques = [];
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (uniques.indexOf(num) === -1) {
            uniques.push(num);
        }
    }
    return uniques;
}

var vals = [];
var uniques = findUniques(vals);

console.log('findUniques input: ' , vals, 'expected: [] got: ', uniques);

vals = [7];
uniques = findUniques(vals);
console.log('findUniques input: ' , vals , 'expected: [7] got: ', uniques);

vals = [5, 4, 5, 7, 1, 9, 4];
uniques = findUniques(vals);
console.log('findUniques input: ' , vals , 'expected: [5, 4, 7, 1, 9] got: ', uniques);


// vals = ['xx', 'aa', 'xx'];
// uniques = findUniques(vals);
// console.log('findUniques expected: [xx, aa] got: ', uniques);




