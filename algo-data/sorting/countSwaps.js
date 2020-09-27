// Bubble Sort
// start looping with i starting at a.length-1 decrementing by 1 while i is greater than 0
// start looping with j starting at 0 incrementing by 1 while j is less than i
// inside the loop of j if a[j] < a[j+1] swap the two position in the a
// outside of both loops return a

// set a variable swap to 0
// inside of the if statement within the nested loop set swap to increment by 1
// after both loops complete console.log the amount of swap, the starting nad ending element.



function countSwaps(a) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let swaps = 0
    let noSwaps
    for (var i = a.length - 1; i > 0; i--) {
        noSwaps = true
        for (var j = 0; j < i; j++) {
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1)
                swaps++
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    console.log(`Array is sorted in ${swaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length-1]}`)

    return a
}

console.log(countSwaps([3, 2, 1]))