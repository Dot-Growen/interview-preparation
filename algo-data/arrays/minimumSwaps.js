function minimumSwaps(arr) {
    var counter = 0
    var arrr = Array.from(Array(arr.length).keys())
    var temp = arrr.map((v) => { return v * 0 })
    for (var i = 0; i < arr.length; i++) {
        temp[arr[i] - 1] = i
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != (i + 1)) {
            var t = temp[i]
            var temp1 = arr[i]
            arr[i] = i + 1
            arr[t] = temp1
            temp[i] = i
            temp[arr[t] - 1] = t
            counter += 1
        }
    }
    return counter
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))