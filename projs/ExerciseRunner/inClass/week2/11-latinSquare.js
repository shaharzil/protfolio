console.log('11-latinSquare');


// Latin Square https://en.wikipedia.org/wiki/Latin_square
// Here is a solution in Java O(N**3): 

var gMat = [
    ['A', 'B', 'C'],
    ['C', 'A', 'B'],
    ['B', 'C', 'A']
];
console.table(gMat);




// var res = isLatin(gMat)
// console.log('Latin? expcting true, got: ', res);

// var res = isLatin([[2, 3], [1, 3]])
// console.log('Latin? expcting false, got: ', res);

function isLatin(mat) {
    var isMatLatin = true;
    for (var i = 0; isMatLatin && i < mat.length; i++) {
        var row = mat[i];
        for (var j = 0; isMatLatin && j < row.length; j++) {
            var item = row[j];

            // Check the Row:
            var lastIdx = row.lastIndexOf(item);
            if (lastIdx !== j) isMatLatin = false;
            //console.log(item, j, lastIdx);
        }
    }
    // Check each column in the mat
    for (var j = 0; isMatLatin && j < mat[0].length; j++) {
        var itemInFirstRow = mat[0][j];
        // Ceck the Col:
        var count = countApperancesInCol(mat, j, itemInFirstRow)
        if (count > 1) isMatLatin = false;
    }

    return isMatLatin;
}

function countApperancesInCol(mat, colIdx, item) {
    var count = 0;
    for (var i = 0; i < mat.length; i++) {
        var currItem = mat[i][colIdx];
        // console.log('Curr Item is: ', currItem);
        if (currItem === item) count++;
    }
    //console.log('countApperancesInCol: ', item, ' appears ', count, ' times');
    return count;
}


var gMat = [
    ['A', 'B', 'C'],
    ['C', 'A', 'B'],
    ['B', 'C', 'A']
];
console.table(gMat);


// NOW: here is a O(N2) Solution!
function isLatinAssaf(mat) {
    var isMatLatin = (mat.length === mat[0].length);
    var itemAppearedMap  = {};
    var itemAppearedInRowMap = {};
    var itemAppearedInColMap = {};

    for (var i = 0; isMatLatin && i < mat.length; i++) {
        itemAppearedInRowMap[i] = {}
        var row = mat[i];
        for (var j = 0; isMatLatin && j < row.length; j++) {
            var item = row[j];
            itemAppearedMap[item] = true;
            if (!itemAppearedInColMap[j]) itemAppearedInColMap[j] = {}

            if (!itemAppearedInColMap[j][item]) itemAppearedInColMap[j][item] = true;
            else isMatLatin = false

            if (!itemAppearedInRowMap[i][item]) itemAppearedInRowMap[i][item] = true;
            else isMatLatin = false;
        }
    }
    console.log('Maps: (mat, row, col)', itemAppearedMap, itemAppearedInRowMap, itemAppearedInRowMap);
    var distinctItemsCount = Object.keys(itemAppearedMap).length;
    if (distinctItemsCount !== mat.length) isMatLatin = false;
    return isMatLatin;
}

var x = isLatinAssaf(gMat);
console.log('Assaf', x);