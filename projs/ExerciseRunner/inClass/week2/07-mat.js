console.log('07-Mat ');

var gMat = [[6, 4, 2],[33, 17, 19]];
// printMat(gMat)

function printMat(mat) {
    console.table(mat)
}

// Here I'm using a row var to hold the current rpw
function printMat1(mat) {
    var str = '';
    for (var i = 0; i < mat.length; i++) {
        var row = mat[i];
        for (var j = 0; j < row.length; j++) {
            var item = row[j];
            str += item + '\t';
        }
        str += '\n';
    }
    console.log(str);
}
function printMat2(mat) {
    var str = '';
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[0].length; j++) {
            var item = mat[i][j];
            str += item + '\t';
        }
        str += '\n';
    }
    console.log(str);
}


// Generate the multiplication table in a 2d array

function getMultTable() {
    var matMult = [];
    for (var i = 0; i < 10; i++) {
        // OR: matMult.push([]);
        matMult[i] = [];
        for (var j = 0; j < 10; j++) {
             var currMult = (i+1) * (j+1);   
             matMult[i][j] = currMult;
             // OR: matMult[i].push(currMult);
        }     
    }
    return matMult;
}

var res = getMultTable();
// console.log('Mult table:');
// console.log(res);
// console.table(res);

/*
Write a function that returns the maximum value in a 2d array.
*/

function findMaxNum(numsMat) {
    var max = -Infinity;
    for (var i = 0; i < numsMat.length; i++) {
        var row = numsMat[i];
        for (var j = 0; j < row.length; j++) {
            var num = row[j];
            if (num > max) max = num;
        }
    }
    return max;
}

var maxNum = findMaxNum(gMat);
console.log('Max Num:', maxNum);
