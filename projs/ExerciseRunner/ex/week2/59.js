'use strict';
console.log('Ex 59');

var gMatSize = +prompt('Enter a number, I think it should be beteen 3 to 10')
var gGameRaplayNum = +prompt('How many time do you want to paly?')
var gMat = creatGame();
console.log(gMat);

printGame()


function creatGame() {
    var mat = []
    for (var i = 0; i < gMatSize; i++) {
        mat[i] = [];
        for (var j = 0; j < gMatSize; j++) {
            var randNum = parseInt(Math.random() * 20)
            if (randNum > 8) mat[i][j] = { item: 'x', willLive: false }
            else mat[i][j] = { item: '', willLive: false }
        }
    }
    return mat;
}


function CheckIfLive() {
    for (var i = 0; i < gMat.length; i++) {
        for (var j = 0; j < gMat[0].length; j++) {
            countNeighbors(i, j)
            if (countNeighbors(i, j) >= 3 && countNeighbors(i, j) <= 5) {
                gMat[i][j].willLive = true  
            }
        }
    }
}

function countNeighbors(rowIdx, colIdx) {
    var row = rowIdx - 2;
    var col = colIdx - 1;
    var count = 0
    for (var i = 0; i < 3; i++) {
        row++
        col = colIdx - 1;
        for (var j = 0; j < 3; j++) {
            if (gMat[row] === undefined || gMat[row][col] === undefined) {
                col++
                continue
            } else if (row === rowIdx && col === colIdx) {
                col++
                continue
            } else if (gMat[row][col].item === 'x') {
                count++
                col++
            }
        }
    }
    return count;
}


function printGame() {
    for (var i = 0; i < gGameRaplayNum; i++) {
        CheckIfLive()        
        console.log('Round ', i+1, ': ' )
        console.table(creatNewGame())
    }
}


function creatNewGame() {
    var mat = gMat.slice()
    for (var i = 0; i < gMatSize; i++) {
        mat[i] = [];
        for (var j = 0; j < gMatSize; j++) {
            if (gMat[i][j].willLive === true) {
                gMat[i][j] = { item: 'x', willLive: false }
                mat[i][j] = 'x'
            } else {
                gMat[i][j] = { item: '', willLive: false }
                mat[i][j] = ''
            }
        }
    }
    return mat;
}



