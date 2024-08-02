"use strict";
function reduce(arr, cb, initVal) {
    let acc;
    let startId;
    if (initVal !== undefined) {
        acc = initVal;
        startId = 0;
    } else {
        acc = arr[0];
        startId = 1;
    }

    for (let i = startId; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
}

const num1 = [1,2,3,4,5,6,7];
const sum = reduce(num1, (acc, currNum) => acc + currNum, 0);
console.log(sum);