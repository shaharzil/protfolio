console.log('08-sparseMat');

var gMat = [[6, 4, 2], [33, 17, 19]];

// sparse mat is a square N*N mat
// less than 20% none-zeros
// in each row at most 2 none-zeros
function isSparse(mat) {
    var matIsSparse = mat.length === mat[0].length
    var matCellsCount = mat.length * mat[0].length;

    var dataCount = 0;
    for (var i = 0; matIsSparse && i < mat.length; i++) {
        var row = mat[i];
        var rowItemsCount = 0;
        for (var j = 0; matIsSparse && j < row.length; j++) {
            var item = row[j];
            if (item) {
                dataCount++;
                rowItemsCount++;
            }

            if (dataCount / matCellsCount >= 0.2) {
                matIsSparse = false;
            }
        }
        if (rowItemsCount > 2) {
            matIsSparse = false;
        }

    }
    return matIsSparse;
}

var res = isSparse(gMat);
// console.log('Sparse? input: not N*M mat expecting false, got: ', res);


var notSparseMat = [
    [0, 0, 0, 9, 0],
    [0, 7, 8, 8, 0],
    [0, 0, 8, 0, 0],
    [0, 0, 25, 0, 0],
    [0, 0, 0, 0, 15]
]

res = isSparse(notSparseMat);
// console.log('Sparse? input: row vilotes the no-more-than-2-in-row rule, expecting false, got: ', res)


var sparseMat = [
    [0, 0, 0, 9, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 8, 0, 0],
    [0, 0, 25, 0, 0],
    [0, 0, 0, 0, 15]
]

res = isSparse(sparseMat);
// console.log('Sparse? input: sparse mat, expecting true, got: ', res);


