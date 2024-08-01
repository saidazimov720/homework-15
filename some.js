function some(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}
const num3 = [1,2,3,4,5,6,7,8,9,10];
const showEven = some(num3, number => number % 2 ==0);
console.log(showEven);