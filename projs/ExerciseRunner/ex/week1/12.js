'use strict';
console.log('Ex 12');


// o Alert the user to think about some actor
// o Using the confirm function, ask the user 2 yes-no questions:
// ▪ Question 1: Male?
// ● Yes:
// o Question 2: Blond?
// ▪ Yes: Philip Seymour!
// ▪ No: Tom Cruise!
// ● No:
// o Question 2: English?
// ▪ Yes: Julianne Moore!
// ▪ No: Natalie Portman!


alert('Think about an actor')
var male = confirm('Male?')

if (male === true) {
    var bloond = confirm('Blond?')
    if (bloond === true) console.log('Philip Seymour!')
    else console.log('Tom Cruise!')
}
else {
    var english = confirm('English?')
    if (english === true) console.log('Julianne Moore!')
    else console.log('Natalie Portman')
}