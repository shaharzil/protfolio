'use strict';
console.log('Ex 47');


// Write a function startWithS that gets an array of names and returns an
// array of names that start with S
// a. Refactor your function to work on any letter by adding a letter argument

var names = ['Chompey' , 'Spay' , 'Lily' , 'Pitch']

function startWithS (firstChar) {
    var namesWithS = [];
    for (var i = 0; i < names.length; i++) {
        namesWithS.push(firstChar + names[i])
    }
    return namesWithS
}

startWithS ()
console.log(startWithS('b'))