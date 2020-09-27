# Review area

## Table of Contents

- [Arrays](#arrays)
  - [2D Array - DS](#hourglasssum)
  - [Arrays: Left Rotation](#rotLeft)
  - [New Year Chaos](#minimumBribes)
  - [Minimum Swaps 2](#minimumSwaps)
  - [Array Manipulation](#arrayManipulation)
- [Dictionaries & Hashmaps](#dictionaries--hashmaps)
- [Dynamic Programming](#dynamic-programming)
- [Graphs](#graphs)
- [Greedy Algorithms](#greedy-algorithms)
- [Linked List](#linked-list)
- [Miscellaneous](#miscellaneous)
- [Recursion & Backtracking](#recursion--backtracking)
- [Search](#search)
- [Sorting](#sorting)
    - [Mark and Toys](#maximumToys)
    - [Sorting: Bubble Sort](#countSwaps)
- [Stacks & Queues](#stacks--queues)
- [String Manipulation](#string-manipulation)
  - [Strings: Making Anagrams](#makeAnagram)
  - [Alternating Characters](#alternatingCharacters)
- [Trees](#trees)

## Arrays

#### [hourglassSum](https://www.hackerrank.com/challenges/2d-array/problem)

###### There are `16` hourglasses in `arr`. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in `arr`, then print the maximum hourglass sum. The array will always be `6 X 6`.

```javascript
function hourglassSum (arr) {
  var max = -10000
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i !== 0 && j !== 0 && j !== 5 && i !== 5) {
        var glassVal =
          arr[i][j] +
          arr[i - 1][j - 1] +
          arr[i - 1][j] +
          arr[i - 1][j + 1] +
          arr[i + 1][j - 1] +
          arr[i + 1][j] +
          arr[i + 1][j + 1]
        if (glassVal > max) {
          max = glassVal
        }
      }
    }
  }
  return max
}
hourglassSum([
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
])
```

#### [rotLeft](https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem)

###### Given an array `a` of `n` integers and a number, `d` , perform `d` left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

```javascript
function rotLeft (a, d) {
  while (d > 0) {
    var temp = a[a.length - 1]
    a[a.length - 1] = a[0]
    for (var i = 1; i < a.length - 1; i++) {
      a[i - 1] = a[i]
    }
    a[a.length - 2] = temp
    d--
  }
  return a
}
console.log(rotLeft([1, 2, 3, 4, 5], 5))
```

#### [minimumBribes](https://www.hackerrank.com/challenges/new-year-chaos/problem)

###### Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

```javascript
function minimumBribes (q) {
  const swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
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
        console.log('Too chaotic')
        return
      }
    }
  }
  console.log(brideCount)
}
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])
```

#### [minimumSwaps](https://www.hackerrank.com/challenges/minimum-swaps-2/problem)

###### You are given an unordered array consisting of consecutive integers [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

```javascript
function minimumSwaps (arr) {
  var counter = 0
  var arrr = Array.from(Array(arr.length).keys())
  var temp = arrr.map(v => {
    return v * 0
  })
  for (var i = 0; i < arr.length; i++) {
    temp[arr[i] - 1] = i
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
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
```

#### [Array Manipulation](https://www.hackerrank.com/challenges/crush/problem)

###### Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

```python
def arrayManipulation(n, queries):
    summ, maxx = 0, 0
    arr = [0]*(n+1)
    for i in queries:
        a, b, k = i[0], i[1], i[2]
        arr[a-1] += k
        arr[b] -= k
        print(arr[:n])

    arr = arr[:n]
    for i in arr:
        summ += i
        maxx = max(summ, maxx)

    return maxx

print(arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
]))
```

## Dictionaries & Hashmaps

## Dynamic Programming

## Graphs

## Greedy Algorithms

## Linked List

## Miscellaneous

## Recursion & Backtracking

## Search

## Sorting

#### [maximumToys](https://www.hackerrank.com/challenges/mark-and-toys/problem)

###### Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example, if `prices = [1,2,3,4]` and Mark has `k = 7` to spend, he can buy items `[1,2,3]` for `6`, or `[3,4]` for `7` units of currency. He would choose the first group of `3` items.

```javascript
function merge (arr1, arr2) {
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
  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result
}

function mergeSort (arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function maximumToys (prices, k) {
  let maxItems = 0
  let amountSpent = 0
  let orderedPrices = mergeSort(prices)
  for (var i = 0; i < orderedPrices.length; i++) {
    if (amountSpent + orderedPrices[i] < k) {
      maxItems++
      amountSpent += orderedPrices[i]
    }
  }
  return maxItems
}

maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)
```

#### [countSwaps](https://www.hackerrank.com/challenges/ctci-bubble-sort/problem)

###### Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

###### 1. Array is sorted in numSwaps swaps., where `numSwaps` is the number of swaps that took place.
###### 2. First Element: firstElement, where `firstElement` is the first element in the sorted array.
###### 3. Last Element: lastElement, where `lastElement` is the last element in the sorted array.

## Stacks & Queues

## String Manipulation

```javascript
function countSwaps (a) {
  const swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
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
    if (noSwaps) break
  }
  console.log(`Array is sorted in ${swaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)

  return a
}

console.log(countSwaps([3, 2, 1]))
```

#### [makeAnagram](https://www.hackerrank.com/challenges/ctci-making-anagrams/problem)

###### Given two strings, `a` and `b`, that may or may not be of the same length, determine the minimum number of character deletions required to make `a` and `b` anagrams. Any characters can be deleted from either of the strings.

```javascript
function makeAnagram (str1, str2) {
  let checkup = {}
  let deleted = 0
  for (let val of str1) {
    checkup[val] ? (checkup[val] += 1) : (checkup[val] = 1)
  }
  for (var i = 0; i < str2.length; i++) {
    let letter = str2[i]
    if (!checkup[letter]) {
      deleted += 1
    } else {
      checkup[letter] -= 1
    }
  }
  for (let i in checkup) {
    if (checkup[i] >= 1) {
      deleted += checkup[i]
    }
  }
  return deleted
}

console.log(makeAnagram('apple', 'applzas'))
```

#### [alternatingCharacters](https://www.hackerrank.com/challenges/alternating-characters/problem)

###### You are given a string containing characters `A` and `B` only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

```python
def alternatingCharacters(str):
    deleted = 0
    for i in range(len(str)-1):
        if str[i] == str[i+1]:
            deleted += 1
    return deleted

alternatingCharacters("AAABBBAABB")
```

## Trees
