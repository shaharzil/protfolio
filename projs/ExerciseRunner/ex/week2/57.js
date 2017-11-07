'use strict';
console.log('Ex 57')


// A symmetric matrix is ​​a matrix in which A [I, J] = A [J, I].
// A. Give an example of a 3 x 3 symmetric matrix.
// B. Write a function that returns a true when the matrix is ​​symmetrical.

var exSymMat = [[1, 2, 3], [2, 0, 7], [3, 7, 4]];

console.table(exSymMat);
console.log(checkIfSymmetric(exSymMat));

function checkIfSymmetric(mat) {
    var isSymmetric = true;

    for (var i = 0; isSymmetric && i < mat.length; i++) {
        var row = mat[i];
        for (var j = 0; j < mat[0].length; j++) {
            var num = row[j];
            var opNum = mat[j][i];
            if (num !== opNum) {
                isSymmetric = false;
            }  
       }
    }
    return isSymmetric
}