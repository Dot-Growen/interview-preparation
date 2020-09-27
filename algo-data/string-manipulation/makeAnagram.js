function makeAnagram(str1, str2) {
    let checkup = {}
    let deleted = 0
    for (let val of str1) {
        checkup[val] ? checkup[val] += 1 : checkup[val] = 1
    }
    for (var i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!(checkup[letter])) {
            deleted += 1
        } else {
            checkup[letter] -= 1;
        }
    }
    for (let i in checkup) {
        if (checkup[i] >= 1) {
            deleted += checkup[i]
        }
    }
    return deleted
}

console.log(makeAnagram("apple", "applzas"))