'use strict'
console.log('calculator')

var gNum1 = '';
var gNum2 = null;
var gOp;
var gMemory = 0;
var gRes = 0;

function addDigit(digit) {
    if (gNum2 === null) {
        gNum1 += digit;
        var elRes = document.querySelector('.output');
        elRes.innerHTML = gNum1;    
    } else {
        gNum2 += digit;
        var elRes = document.querySelector('.output');
        elRes.innerHTML = gNum2;    
    }
}

function getOp(op) {
    gOp = op;
    if (gNum2 !== null) {
        gNum1 = gRes;
    }
    gNum2 = '';
}

function showRes() {
    gNum1 = parseInt(gNum1);
    gNum2 = parseInt(gNum2)
    switch (gOp) {
        case '+':
            gRes = gNum1 + gNum2;
            break;
        case '*':
            gRes = gNum1 * gNum2;
            break
        case '-':
            gRes = gNum1 - gNum2;
            break;
        case '/':
            gRes = gNum1 / gNum2;
            break
        default:
            break;
    }
    var elRes = document.querySelector('.output');
    elRes.innerHTML = gRes;
}

function changeMemory(op) {
    switch (op) {
        case 'M+':
            gMemory += gRes;
            break;
        case 'M-':
            gMemory -= gRes;
            break;
        case 'MC':
            gMemory = 0;
        default:
            break;
    }
}

function reset() {
    gNum1 = 0;
    gNum2 = 0;
    gRes = 0;
    var elRes = document.querySelector('.output');
    elRes.innerHTML = gRes;
}