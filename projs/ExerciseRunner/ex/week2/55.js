'use strict';
console.log('Ex 55')


// Write a function findMode(mat) that will find and print the number
// that occurs most times in a 2d array.
// BONUS: If there are ties (e.g.: both 47 and 53 appeared 17 times),
// print all (TIP: use an object as a coutMap)

var gCountMap = {};
var mat = CreateMat();
console.table(mat);
findMode(mat)

function CreateMat() {
    var mat = [];
    for (var i = 0; i < 3; i++) {
        mat[i] = [];
        for (var j = 0; j < 3; j++) {
            mat[i][j] = parseInt(Math.random() * 11);
            if (!gCountMap[mat[i][j]]) gCountMap[mat[i][j]] = 0
            gCountMap[mat[i][j]]++
        }
    }
    return mat;
}

function findMode(mat) {
    var frequentNum = [];
    
    var frequentNumCount = 0
    for (var num in gCountMap) {
        var curNum = gCountMap[num]
        if (curNum > frequentNumCount) frequentNumCount = curNum;
    }

    for (var num in gCountMap) {
        curNum = gCountMap[num]
        if (curNum === frequentNumCount) {frequentNum.push(num)}
        
    }
    console.log('The number that occurs most times is: ', frequentNum)
}
