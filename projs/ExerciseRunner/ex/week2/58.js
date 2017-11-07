'use strict';
console.log('Ex 58');


var gboardMat = [];
var gNumsBank = fillNumsBank();
fillNumsBank()
var gPlayers = [
    { name: 'player 1', hitsCount: 0, board: createBingoBoard(5) },
    { name: 'player 2', hitsCount: 0, board: createBingoBoard(5) }
]
setInterval(PlayBingo, 1000)

function fillNumsBank() {
    var bank = [];
    for (var i = 1; i < 100; i++) {
        bank.push(i);
    }
    return bank
}


function createBingoBoard(n) {
    gboardMat = []
    for (var i = 0; i < n; i++) {
        gboardMat[i] = [];
        for (var j = 0; j < n; j++) {
            var uniqRandNum = getUniqRandNum();
            gboardMat[i][j] = { num: uniqRandNum, isHit: false };
        }
    }
    gNumsBank = fillNumsBank();
    return gboardMat
}

function getUniqRandNum() {
    var randNumIdx = parseInt(Math.random() * (gNumsBank.length - 1));
    var randNum = gNumsBank.splice(randNumIdx, 1)[0];
    return randNum
}


function PlayBingo() {
    var calledNum = getUniqRandNum();
    var playerWon = false
    for (var i = 0;!playerWon && i < gPlayers.length; i++) {
        var curboard = gPlayers[i].board;
        for (var j = 0;!playerWon && j < curboard.length; j++) {
            for (var k = 0;!playerWon && k < curboard[j].length; k++) {
                var item = curboard[j][k].num;
                if (item === calledNum) {
                    gPlayers[i].hitsCount++
                    curboard[j][k].isHit = true;
                    checkRow(curboard, j, i)
                    if (j === k) checkDiagonal1(curboard, i)
                    if (j === (curboard[0].length - 1 - k)) checkDiagonal2(curboard, i)
                    if (checkWin(5, i)) playerWon = true;
                }
            }
        }
    }
    fillNumsBank()
    return calledNum;
}

function checkWin(n, playerIdx) {
    var isWin = false
    var player = gPlayers[playerIdx]['name']
    for (var i = 0; i < gPlayers.length; i++) {
        if (gPlayers[i].hitsCount === n * n) isWin = true
    }
    if (isWin) console.log ('OMG! ', player, ' won!!')
    return isWin
}

function checkRow(mat, rowIdx, playerIdx) {
    var isRow = true
    var player = gPlayers[playerIdx]['name'];
    for (var i = 0; (isRow) && i < mat[rowIdx].length; i++) {
        if (mat[rowIdx][i].isHit === false) {
            isRow = false;
        }
    }
    if (isRow) {
        console.log( player, ': yayy, a row!')
    }
    return isRow;
}


function checkDiagonal1(mat, playerIdx) {
    var isDiagonal1 = true;
    var player = gPlayers[playerIdx]['name'];
    for (var i = 0; i < mat.length; i++) {
        if (mat[i][i].isHit === false)
            isDiagonal1 = false
    }
    if (isDiagonal1) {
        console.log( player, ': yayy, a diagonal1!')
    }
    return isDiagonal1
}


function checkDiagonal2(mat, playerIdx) {
    var isDiagonal2 = true;
    var col = mat.length - 1;
    var player = gPlayers[playerIdx]['name'];
    for (var i = 0; i < mat.length; i++) {
        if (mat[i][col].isHit === false) {
            isDiagonal2 = false
        }
        col--
    }
    if (isDiagonal2) {
        console.log( player, ': yayy, a diagonal2!')
    }
    return isDiagonal2
}


