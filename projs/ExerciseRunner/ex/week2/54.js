'use strict';
console.log('Ex 54')


// Fill up a 2d array with random numbers in a specified range.
// Create the following functions:
//  sumCol(mat, colIdx)
//  sumRow(mat, rowIdx)
//  findMax(mat ,colIdx)
//  findAvg(mat)


function CreateMat() {
    var mat = [];
    for (var i = 0; i < 3; i++) {
        mat[i] = []
        for (var j = 0; j < 4; j++) {
            mat[i][j] = parseInt(Math.random() * 11)
        }
    }
    return mat;
}

var mat = CreateMat()
console.table(mat)


function sumCol(mat, colIdx) {
    var sum = 0;

    for (var i = 0; i < mat.length; i++) {
        sum += mat[i][colIdx]
    }
    return sum
}

var theSumCol = sumCol(mat, 1)
console.log('The sum of the col you wanted is: ', theSumCol)



function sumRow(mat, rowIdx) {
    var sum = 0;

    for (var i = 0; i < mat[rowIdx].length; i++) {
        sum += mat[rowIdx][i]
    }
    return sum
}

var theSumRows = sumRow(mat, 1)
console.log('The sum of the Row you wanted is: ', theSumRows)


function findMax(mat, colIdx) {
    var max = -Infinity;

    for (var i = 0; i < mat.length; i++) {
        var curNum = mat[i][colIdx];
        if (max < curNum)
            max = curNum
    }
    return max
}

var theMax = findMax(mat, 1)
console.log('The max num of the col you wanted is: ', theMax)

function findAvg (mat) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < mat.length; i++) {
        var row = mat[i]
        for (var j = 0; j < row.length; j++) {
            sum += row[j];
            count++           
        }
    }
    var avg = sum / count;
    return avg
}

var matAvg = findAvg(mat)
console.log ('The avg of the mat is: ', matAvg)