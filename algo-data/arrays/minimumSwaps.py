def minimumSwaps(arr):
    counter = 0
    temp = [0]*len(arr)
    
    for index, value in enumerate(arr):
        print(temp)
        temp[value-1] = index
        
    for i in range(len(arr)):
        if arr[i]!=(i+1):
            t = temp[i]
            arr[i], arr[t] = i+1, arr[i]
            temp[i], temp[arr[t]-1] = i, t
            counter+=1
    return counter

print(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))