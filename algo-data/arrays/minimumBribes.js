// set a bride number variable
// start looping through the array
// if the index+1 is one less then the then the val at the index increment the bribe by one
// if the index+1 is two less then the then the val at the index increment the bribe by one
// if the index+1 is three or more less then the then the val at the index return " Too chaotic "
// after the loop ends return bride

function minimumBribes(q) {

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    var brideCount = 0
    for (let i = q.length - 1; i > 0; i--) {
        
        if (q[i] != i + 1) {
            if (q[i - 1] == i + 1) {
                brideCount++
                swap(q, i, i - 1)
            } else if (q[i - 2] == i + 1) {
                brideCount += 2
                swap(q, i - 2, i - 1)
                swap(q, i - 1, i)
            } else {
                console.log("Too chaotic")
                return
            }
        }
    }
    console.log(brideCount)
}

minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])
