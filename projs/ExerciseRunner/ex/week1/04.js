'use strict';
console.log('Ex 4');

// Read distance and speed and print the time

var distance = +prompt('What is yor distance in kilometers?');
var speed = +prompt('What is your speed in kilometers per hour?');
var time = distance/speed;

console.log('It will take you ' + time + ' hours to get to your destination');