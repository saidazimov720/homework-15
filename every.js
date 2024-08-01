function every(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

const num4 = [1,2,3,4,5,6,7,8,9,10];
const showMe = every(num4, number => number % 2 == 0);
console.log(showMe);