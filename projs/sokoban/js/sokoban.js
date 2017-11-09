'use strict'
console.log(' sprint 1 - Sokoban');

var gBoard;

var gGamerPos = { i: 2, j: 2 };

function initGame() {
    gBoard = buildBoard();
    console.table(gBoard)
    renderBoard(gBoard)
}


function buildBoard() {
    var mat = [
        ['floor', 'floor', 'wall', 'wall', 'wall', 'wall', 'wall', 'floor'],
        ['wall', 'wall', 'wall', 'floor', 'floor', 'floor', 'wall', 'floor'],
        ['wall', 'target', 'floor', 'box', 'floor', 'floor', 'wall', 'floor'],
        ['wall', 'wall', 'wall', 'floor', 'box', 'target', 'wall', 'floor'],
        ['wall', 'target', 'wall', 'wall', 'box', 'floor', 'wall', 'floor'],
        ['wall', 'floor', 'wall', 'floor', 'target', 'floor', 'wall', 'wall'],
        ['wall', 'box', 'floor', 'box', 'box', 'box', 'target', 'wall'],
        ['wall', 'floor', 'floor', 'floor', 'target', 'floor', 'floor', 'wall'],
        ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],

    ];
    return mat
}


function renderBoard(board) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            if (gBoard[i][j] === 'wall') var cellClass = 'wall'
            if (gBoard[i][j] === 'target') var cellClass = 'target'
            if (gBoard[i][j] === 'box') var cellClass = 'box'
            if (gBoard[i][j] === 'floor') var cellClass = 'floor'
            var tdId = 'cell-' + i + '-' + j;
            strHtml += '<td class= "cell ' + cellClass + '" id="' + tdId + '" onclick="cellClicked(this,' + i + ',' + j + ')"></td>';
        }
        strHtml += '</tr>';
    }
    var elBoard = document.querySelector('.gameBoard');
    elBoard.innerHTML = strHtml;
    var startPoint = document.querySelector('#cell-' + gGamerPos.i + '-' + gGamerPos.j)
    startPoint.classList.add("bunny")
    var missedTarget = document.querySelector('#cell-6-3')
    missedTarget.classList.add('target')
}

function getCellCoord(strCellId) {
    var coord = {};
    coord.i = +strCellId.substring(5, strCellId.lastIndexOf('-'));
    coord.j = +strCellId.substring(strCellId.lastIndexOf('-') + 1);
    return coord;
}

function cellClicked(elNextCell, i, j) {
    var elCurCell = document.querySelector('#cell-' + gGamerPos.i + '-' + gGamerPos.j)
    if (Math.abs((i + j) - (gGamerPos.i + gGamerPos.j)) === 1) {
        var iDiff = i - gGamerPos.i
        var jDiff = j - gGamerPos.j
        var nextI = Math.abs(gGamerPos.i + iDiff)
        var nextj = Math.abs(gGamerPos.j + jDiff)
        var elNextBox2 = document.querySelector('#cell-' + (nextI + iDiff) + '-' + (nextj + jDiff))
        if (!elNextCell.classList.contains("wall")) {
            if (elNextCell.classList.contains("box")) {
                if (elNextBox2.classList.contains("box") || elNextBox2.classList.contains("wall")) return
                var nextBoxI = nextI + iDiff
                var nextBoxj = nextj + jDiff
                var elNextBox = document.querySelector('#cell-' + nextBoxI + '-' + nextBoxj)
                elNextCell.classList.remove("box")
                elNextBox.classList.add("box")
            }
            elCurCell.classList.remove("bunny")
            elNextCell.classList.add("bunny")
            gGamerPos.i = nextI
            gGamerPos.j = nextj
        }
    }
    if (checkGameOver()) document.querySelector('.victory').innerText = 'yay all of my carrots are in a safe place!!'
}


function checkGameOver() {
    var boxOnTargetCount = 0;
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var elCell = document.querySelector('#cell-' + i + '-' + j)
            if (elCell.classList.contains("box") && elCell.classList.contains("target"))
            boxOnTargetCount++
        }
    }
    if (boxOnTargetCount === 7) return true
}


