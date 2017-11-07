'use strict';
console.log('Ex 18');

// Write a function: isOfAge that gets a name and an age, if the user is younger than eighteen, 
// alert him that he is too young, this function also returns a boolean

var userName = prompt("enter your name please:");
var userAge = +prompt("enter your age please:");

isOfAge(userName, userAge);

function isOfAge(name, age) {
    if (age < 18) {
        alert('sorry ' + name + ', you are out of age for this site.');
        return false;
    } else {
        alert('welcome ' + name + '.');
        return true;
    }
}
