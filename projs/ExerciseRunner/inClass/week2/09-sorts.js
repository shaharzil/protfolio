console.log('09-sorts');

// var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
var vals = getLargeArray();

console.time('bubble sort');
bubbleSort(vals);
console.timeEnd('bubble sort');

console.time('array sort');
vals.sort(numsComperator);
console.timeEnd('array sort');

console.time('merge sort');
mergeSort(vals);
console.timeEnd('merge sort');

function numsComperator(num1, num2) {
    return num1 - num2;
}


function getLargeArray() {
    var res = [];
    for (var i = 0; i < 1000; i++) res.push(1000 - i);
    return res;
}

function bubbleSort(a) {
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    }
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}


// This function merges 2 sorted arrays into a single array
function merge(arr1, arr2) {
    var result = [];
    // while there are items in both arrays
    while (arr1.length && arr2.length) {
        // push the bigger
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    // Add the remaining items
    while (arr1.length) result.push(arr1.shift());
    while (arr2.length) result.push(arr2.shift());

    return result;
}

// Basic understanding of Recusions:

// Write a function factorial that return n!
function factorial(n) {
    var fact = 1;
    for (var num = 2; num <= n; num++) {
        fact *= num;
    }
    return fact;
}

function factorialRecursion(n) {
    if (n === 1) return 1;
    else return factorialRecursion(n - 1) * n;
}
var res = factorial(6);
console.log('res (loop): ', res);
res = factorialRecursion(6);
console.log('res (recursion): ', res);





function binarySearch(array, key, left, right) {
    if (left > right) {
      return -1;
    }
    var middle = Math.floor((right + left) / 2);
    if (array[middle] === key) {
      return middle;
    } else if (array[middle] > key) {
      return binarySearch(array, key, left, middle - 1);
    } else {
      return binarySearch(array, key, middle + 1, right);
    }
  }