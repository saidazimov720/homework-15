function reduce(arr, cb, initVal) {
    let acc = initVal !== undefined ? initVal  : arr[0];
    let startId = initVal != undefined ? 0:1;

    for (let i = startId; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr);
    }
    
}