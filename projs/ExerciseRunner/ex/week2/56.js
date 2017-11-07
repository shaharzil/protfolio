'use strict';
console.log('Ex 56')


// Write a function that gets a 2d array and checks if it is a magic
// square:
//  it must be square,
//  Rows' sums, columns' sums, and the two diagonals sums should be equal.

var gMat = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
console.log('gMat: ', gMat)
console.log('Is the mat is a magic square? ', checIfkMagic())

function checIfkMagic(  ) {
    var matIsMagic = gMat.length === gMat[0].length
    var sumedNum = sumRow(0)
    
    for (var i = 0; matIsMagic && i < gMat.length; i++) {
        if (sumedNum !== sumRow(i)) matIsMagic = false
    }

    for (var i = 0; matIsMagic && i < gMat[0].length; i++) {
        if (sumedNum !== sumCol(i)) matIsMagic = false
    }

    if (sumDiagonal1() !== sumedNum) matIsMagic = false
    if (sumDiagonal1() !== sumedNum) matIsMagic = false
    
    return matIsMagic
}


function sumRow(rowIdx) {
    var sum = 0;
    for (var i = 0; i < gMat[rowIdx].length; i++) {
        sum += gMat[rowIdx][i]
    }
    return sum
}


function sumCol(colIdx) {
    var sum = 0;
    for (var i = 0; i <gMat.length; i++) {
        sum += gMat[i][colIdx]
    }
    return sum
}

function sumDiagonal1() {
    var sum = 0;
    for (var i = 0; i < gMat.length; i++) {
        sum += gMat[i][i]
    }
    return sum
}

function sumDiagonal2() {
    var sum = 0;
    var col = gMat.length - 1;
    for (var i = 0; i < gMat.length; i++) {
        sum += gMat[i][col]
        col--
    }
    return sum
}
