'use strict';

console.log('Day 2 ');
// Read a 5 digits number and check if it symmetric 
// 12321
// var isSymetric = true;

// var num = 1267621; // +prompt('num?');
// var helper = 1000000;
// var count = 0;
// while (count < 3) {
//     var rightDigit = num % 10;
//     var leftDigit = parseInt(num / helper);
//     console.log(rightDigit, leftDigit);

//     if (rightDigit !== leftDigit) {
//         isSymetric = false;
//     }
//     num = parseInt((num - (leftDigit*helper)) /10);
//     helper /= 100;
//     console.log(num);
//     count++;
// }

// console.log(isSymetric);


// Read 10 numbers and print: sum, max, min

// var count = 0;
// var sum = 0;
// var max = -Infinity;
// var min = Infinity;

// while (count < 3) {
//     console.log(count);
//     var num = +prompt('num' + (count+1) + '?');

//     if (num > max) max = num;
//     if (num < min) min = num;

//     sum += num;
//     count++;
// }
// console.log('Sum ', sum);
// console.log('Max ', max);
// console.log('Min ', min);





// ZAKIF - Read names until “QUIT” is entered then print 
// the names separated by *

// var name = prompt('Name?');
// var str = '';
// while (name !== 'QUIT') {
//    str += name + '*';
//    name = prompt('Name?'); 
// }
// console.log('Done ', str);


// Read a number and check if that number is prime

// var num = +prompt('num?');
// var divider = 2;
// var isPrime = true;
// var limit = Math.sqrt(num);

// while (isPrime && divider <= limit) {
//     if (num % divider === 0) {
//         console.log(num + ' is not prime, divided by' + divider);
//         isPrime = false;
//     } else {
//         console.log('NOT divided by' + divider);
//     }
//     divider++;
// }
// console.log(num, 'Is prime? ', isPrime);




// Read numbers until you get an odd number (ZAKIF!),
// then print the maximal even number you got

// var num = +prompt('num?');
// var max = -Infinity;

// while (num % 2 === 0) {
//     console.log('Handling', num);
//     if (num > max) {
//         max = num;
//     }

//     num = +prompt('num?');
// }

// console.log('Done, max is: ', max);


// Read numbers until their sum is bigger than 100
// then print the average
// var sum = 0;
// var count = 0

// while (sum <= 100) {
//     var num = +prompt('num?');
//     count++;
//     sum += num;
// }
// var avg = sum / count;
// console.log('Avg is', avg);





// ZAKIF - Read choices from the user, untill 0 is entered
// var choice = +prompt('Please enter your choice (0 to exit):');

// while (choice !== 0) {
//    alert( 'Your choice is ' + choice );
//    choice = +prompt('Please enter your choice (0 to exit):');
// }
// alert ('Bye');




// print the number digit by digit
// var num = 98765;
// while (num > 0) {
//    var digit = num % 10;
//    console.log (digit);
//    num = parseInt(num/10);
// }
