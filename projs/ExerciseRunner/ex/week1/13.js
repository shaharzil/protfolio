'use strict';
console.log('Ex 13');


// The Elevator –
// o Keep a currentFloor variable, initialize it to 0
// o Ask the user which floor he needs
// o Validate its between -2 and 4
// o Update the currentFloor variable accordingly
// o And let the use know his current floor
// o If the user goes to floor 0 add 'Bye Bye'
// o If the user goes to parking (negative floors) add: 'Drive Safely'


var currentFloor = 0
var wantedFloor = +prompt('Wich floor do you need?')

if ((-2 > wantedFloor) || (wantedFloor > 4)) {
    console.log('Floor dont exist')
}
else {
    currentFloor += wantedFloor
    console.log ('youre now on the ' + currentFloor + ' floor')
    if (currentFloor === 0) {
        console.log('Bye Bye')
    }
    if (currentFloor < 0) {
        console.log('Drive Safly')
    }
}