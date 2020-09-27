# 8. Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array. (NOT DONE)

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