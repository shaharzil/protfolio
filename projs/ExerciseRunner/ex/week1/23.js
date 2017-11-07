'use strict';
console.log('Ex 23');


var astCount = '';
var ast = '*';

function getAst(ast) {

    for (var i = 0; i < ranNum; i++) {
        astCount += ast;
        console.log(astCount);
    }


    for (var i = 0; i < 10; i++) {
        astCount = astCount.slice(0, -1);
        console.log(astCount);
    }
}

getAst(ast)

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

var ranNum = parseInt(getRandom(1, 10));


















// var str = ''
// var astNum = +prompt('num?');

// function getAsterisks (astNum){
//     for (var i = 0; i < astNum; i++) {
//         str += "*" 
//     }
// return str
// }

// var sumAst = getAsterisks (astNum);
// console.log(sumAst)