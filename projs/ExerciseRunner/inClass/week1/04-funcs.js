console.log('04 Funcs');


// Write a function: printPrimes
// that gets 2 numbers: minRange and maxRange
// and prints all the prime numbers in that range.


var gName = 'popo';
function foo() {
    return 17;
}
gName = foo();
console.log(gName);


function isPrimeNum(num) {
    var divider = 2;
    var isPrime = true;
    var limit = Math.sqrt(num);

    while (isPrime && divider <= limit) {
        if (num % divider === 0) {
            // console.log(num + ' is not prime, divided by ' + divider);
            isPrime = false;
        } else divider++;
    }
    // console.log(num, 'Is prime? ', isPrime);
    return isPrime;
}

function printPrimes(minRange, maxRange) {
    for (var i = minRange; i <= maxRange; i++) {
        var isPrime = isPrimeNum(i);
        if (isPrime) {
            console.log(i + ' is prime!');
        }
    }
}
printPrimes(1000, 1100)





// var num = +prompt('num?');






// var dogName = 'Bobi'; 

// function greetUser(greeting, userName) {
//     dogName = 'bobo'
//     console.log(greeting + ' ' + userName + dogName);
// }

// greetUser('Ahalan', 'Popo');
// console.log(dogName);


// function printSum(a, b) {
//     console.log('sum is: ', a+b);
// }

// function sum(a, b) {
//     var result = a + b;
//     return result;
// } 


// var theSum = sum(7, 9);
// console.log('Result ', theSum);

// theSum = sum(5, 1);
// console.log('Result ', theSum);
// console.log('Result ', sum(8, 2));


// var num =  3;  //+prompt('num?');

// printSum(num, 1);

// console.log(num);


// var name = prompt('Your name?');

// greetUser('Hi', name);
// greetUser('Hola', 'Muki');
