def alternatingCharacters(str):
    deleted = 0
    for i in range(len(str)-1):
        if str[i] == str[i+1]:
            deleted += 1
    return deleted

print(alternatingCharacters("AAABBBAABB"))