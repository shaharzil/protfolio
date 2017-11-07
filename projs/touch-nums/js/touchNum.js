'use strict';
console.log('Touch the Numbers');

var gNums;
var gBoard = creatBoard()
var gameCount = 1;
var timeCount = 0;
renderBoard(gBoard)


function creatBoard() {
    gNums = fillNumsBank();
    var board = [];
    for (var i = 0; i < 4; i++) {
        board[i] = []
        for (var j = 0; j < 4; j++) {
            board[i][j] = getUniqRandNum();
        }
    }
    return board;
}

function getUniqRandNum() {
    var randNumIdx = parseInt(Math.random() * (gNums.length - 1));
    var randNum = gNums.splice(randNumIdx, 1)[0];
    return randNum
}

function fillNumsBank() {
    var bank = [];
    for (var i = 1; i < 17; i++) {
        bank.push(i);
    }
    return bank
}



function renderBoard(board) {
    var elBoard = document.querySelector(".gameTable");
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>\n';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            strHtml += '\t<td class="boardCell" onclick="numClicked(this)">'
            strHtml += cell;
            strHtml += '</td>'
        }
        strHtml += '\n</tr>\n';
    }
    elBoard.innerHTML = strHtml;
    console.log(strHtml);
}


function numClicked(elCell) {
    var strCount = '' + gameCount;
    if (gameCount === 1) var time = setInterval(RenderTime, 1000)
    if (gameCount === 16) clearInterval(time)
    if (strCount === elCell.innerHTML) {
        elCell.classList.add('clickedCorect')
        gameCount++
    }
    
    console.log(elCell.innerHTML, strCount, elCell)
}


function RenderTime() {
    timeCount++
    document.querySelector(".timing").innerHTML = 'Game time: ' + timeCount;
}