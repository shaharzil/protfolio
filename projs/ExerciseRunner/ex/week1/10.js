'use strict';
console.log('Ex 10');

// Ask the user how many friends he has on FB and print out an analysis:
// o More than 500 – OMG, celebrity!
// o More than 300 (and up to 500) – Well connected!
// o 100 and more – Knows some people
// o Up to 100 – Quite picky aren't you?
// o 0 – Lets be friends?


var fbFriends = +prompt('How many friend you have on Facebook?');


if (500 < fbFriends) {
    console.log('OMG, celebrity!')
} else if (300 < fbFriends) {
    console.log('Well connected!')
} else if (100 <= fbFriends) {
    console.log('Knows some people')
} if (0 < fbFriends) {
    console.log('Quite picky arnet you?')
} else if (fbFriends === 0) {
    console.log('Lets be friends?')
} else if (fbFriends < 0) {
    console.log('Cant be smaller then 0')
}

