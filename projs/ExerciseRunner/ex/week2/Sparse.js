'use strict';
console.log('Ex sparse')


function regenerateSparseMat(n, vals, rowIdxs, colIdxs) {
    var sparseMat = [];

    for (var i = 0; i < n; i++) {
        sparseMat[i] = []
        for (var j = 0; j < n; j++) {
            sparseMat[i][j] = 0
        }
    }

    for (var i = 0; i < vals.length; i++) {
        var val = vals[i];
        var row = rowIdxs[i];
        var col = colIdxs[i];
        sparseMat[row][col] = val
    }
    return sparseMat
}


var res = regenerateSparseMat(5,  [15, 25, 8, 9], [4, 3, 2, 0], [4, 2, 2, 3])
console.table(res)

