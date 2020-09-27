// Sort the prices in ascending order
// Set variable maxItems and amountSpent
// Start looping i through prices 
// If amountSpent + prices[i] is less than budget increment maxItems by 1 and add prices[i] to amount spent
// return maxItems

function merge(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


function maximumToys(prices, k) {
    let maxItems = 0
    let amountSpent = 0
    let orderedPrices = mergeSort(prices)
    for (var i = 0; i < orderedPrices.length; i++) {
        if ((amountSpent + orderedPrices[i]) < k) {
            maxItems++
            amountSpent += orderedPrices[i]
        }
    }
    return maxItems
}

maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)