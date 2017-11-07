'use strict'


var itemCode = +prompt('Enter Code');

switch (itemCode) {
    case 101:
        console.log('handle code: 101 - Dog');
        break;
    case 102:
        console.log('handle code: 102 - Cat');
        break;
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
        console.log('handle code: AHA');
        break;
    default:
        console.log('Unknown item');
}
