'use strict'
console.log('balloon pop')


var gBalloons = [
    { color: 'palevioletred', bottom: 0, speed: 8 },
    { color: 'black', bottom: 0, speed: 8 },
]


function moveBallons() {
    var elBalloons = document.querySelectorAll('.balloon');
    var gIntervalballoons = setInterval(function () {
        for (var i = 0; i < elBalloons.length; i++) {
            var elballoon = elBalloons[i];
            var balloon = gBalloons[i];
            balloon.bottom += balloon.speed;
            elballoon.style.bottom = balloon.bottom + 'px';

        }
    }, 100);
}

function ballonClicked (elballoon) {
    var popSound = document.querySelector('.popSound')
    popSound.play()
    elballoon.style.display = 'none';
}