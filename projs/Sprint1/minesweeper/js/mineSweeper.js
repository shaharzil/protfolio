'use strict'
console.log('sprint1 - Mine Sweeper')

var gLevel = {
    SIZE: 4,
    mines: 2,
    MINES: 2
};

var gState = {
    isGameOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gBoard;

var gZersLocations = [];


function initGame() {
    gBoard = buildBoard()
    renderBoard(gBoard)
    gState.isGameOn = true;
}

function buildBoard() {
    var mat = [];
    for (var i = 0; i < gLevel.SIZE; i++) {
        mat[i] = [];
        for (var j = 0; j < gLevel.SIZE; j++) {
            mat[i][j] = { item: '', isBomb: false, mineNegsCount: 0 }
        }
    }
    while (gLevel.mines > 0) {
        var bombRow = parseInt(Math.random() * gLevel.SIZE)
        var bombCol = parseInt(Math.random() * gLevel.SIZE)
        if (mat[bombRow][bombCol].isBomb === false) {
            mat[bombRow][bombCol] = { item: '💣', isBomb: true, mineNegsCount: 0 };
            gLevel.mines--
        }
    }
    setMinesNegsCount(mat)
    console.log(mat)
    return mat;
}



function setMinesNegsCount(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            for (var k = -1; k < 2; k++) {
                for (var l = -1; l < 2; l++) {
                    var currNegRow = i + k;
                    var currNegCol = j + l;
                    if (currNegRow === i && currNegCol === j) continue;
                    if (currNegRow < 0 || currNegCol < 0 || currNegRow >= board.length ||
                        currNegCol >= board.length) continue;
                    var currNeg = board[currNegRow][currNegCol];
                    if (currNeg.isBomb) board[i][j].mineNegsCount++
                }
            }
            if (!board[i][j].isBomb) board[i][j].item = board[i][j].mineNegsCount
        }
    }
}


function renderBoard(board) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var elCell = gBoard[i][j].item;
            var tdId = 'cell-' + i + '-' + j;
            strHtml += '<td class= "cell" id="' + tdId + '" oncontextmenu="cellMarked(this); return false;"\
             onclick="cellClicked(' + gBoard[i][j].isBomb + ',' + i + ',' + j + ')"></td>';
        }
        strHtml += '</tr>';
    }
    var elBoard = document.querySelector('.gameBoard');
    elBoard.innerHTML = strHtml;
}


function cellClicked(isBomb, i, j) {
    if (!gState.isGameOn) {
        return
    }
    var elCell = document.querySelector('#cell-' + i + '-' + j);
    elCell.innerText = gBoard[i][j].item;
    if (gBoard[i][j].isBomb === true) printLose()
    if (elCell.innerText === '0') expandShown(gBoard, elCell, i, j)
    else if (!elCell.classList.contains('mark')) {
        gState.shownCount++
        elCell.classList.add('mark')
    }
}


function cellMarked(elCell) {
    if (elCell.innerText !== '🏴') elCell.innerText = '🏴';
    else elCell.innerText = '';
}


function expandShown(board, elCell, rowIdx, colIdx) {
    if (elCell.innerText === '0') {
        for (var i = rowIdx - 1; i < rowIdx + 2; i++) {
            for (var j = colIdx - 1; j < colIdx + 2; j++) {
                if (!(i < 0 || j < 0 || i >= gBoard.length || j >= gBoard.length)) {
                    var elCell = document.querySelector('#cell-' + i + '-' + j);
                    if (!elCell.classList.contains('mark')) {
                        gState.shownCount++
                        elCell.classList.add('mark')
                        elCell.innerText = gBoard[i][j].item;
                        expandShown(gBoard, elCell, i, j)
                    }
                    if (elCell.innerText === '0') elCell.innerText = ' '
                }
            }
        }
    }
}


function printLose() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var elCell = document.querySelector('#cell-' + i + '-' + j);
            if (gBoard[i][j].isBomb) {
                elCell.innerText = gBoard[i][j].item;
                gState.isGameOn = false;
            }
        }
    }
}

function checkGameOver() {
    if (gState.shownCount + gLevel.MINES === gLevel.SIZE * gLevel.SIZE)
        gState.isGameOn = false;
    return true
}

function getTime() {
    gState.secsPassed++
    var elTiming = document.querySelector('.time')
    elTiming.innerText = gState.secsPassed;
}

function chengeToBeginner() {
    gLevel.SIZE = 4;
    gLevel.mines = 2;
    gLevel.MINES = 2;
    initGame();
}

function chengeToMedium() {
    gLevel.SIZE = 6;
    gLevel.mines = 5;
    gLevel.MINES = 5;
    initGame();
}

function chengeToExpert() {
    gLevel.SIZE = 8;
    gLevel.mines = 15;
    gLevel.MINES = 15;
    initGame();
}