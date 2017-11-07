'use strict';
console.log('Guess gNumber');


var gNum = parseInt(Math.random() * 5 + 1);
console.log(gNum);

function playGame() {
    var userNum = +prompt('gNum?');

    var strHtml = ''

    if (userNum < gNum) {
        console.log('You guessed: ' + userNum + ' - Too low');
        strHtml = 'You guessed: ' + userNum + ' - Too low'
    } else if (userNum > gNum) {
        console.log('You guessed: ' + userNum + ' - Too high')
        strHtml = ('You guessed: ' + userNum + ' - Too high')
    } else {
        console.log('Yayy, You are right!')
        strHtml = ('Yayy, You are right!')
    }

    var elUserGuess = document.querySelector('.userGuess')
    elUserGuess.innerHTML = strHtml;

}

