function hourglassSum(arr) {
    var max = -10000
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if ((i !== 0) && (j !== 0) && (j !== 5) && (i !== 5)) {
                var glassVal = (arr[i][j] + arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1])
                if (glassVal > max) {
                    max = glassVal
                }
            }
        }
    }
    return max
}