console.log('05 Arrays');

// Write a program that generate 10 random numbers,
// sort them and print them from 
// the biggest to the smallest

var nums = [];
for (var i = 0; i < 10; i++) {
    var randNum = parseInt(Math.random() * 101);
    nums.push(randNum)
}

nums.sort(compareNums);

console.log(nums);

// num1 is bigger => return a positive num 
// num1 is smaller => return a negative num 
// equal => return 0 
function compareNums(num1, num2) {
    return num2 - num1;
}


