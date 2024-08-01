function filter(arr, cb) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = filter(num, number => number % 2 == 0);
console.log(even);