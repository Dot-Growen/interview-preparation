// Create a dictionary `counter` our of the string input
// create a `lowest` & `over` variables
// start looping through the dictionary
//** assign the character's value that occurs least often to the lowest variable
// start looping through the dictionary
//**  if a value in the dictionary is greater than the lowest than subtract the lowest from that value and add it to `over` 
// if `over` is greater than one return "NO"
// else return "YES"
function isValid(s) {
    let counter = {}
    let valCounter = {}
    let repeatedFreq = 0 // which value occurs the most
    let freqOnce = 0
    let freqCount = 0
    let over = 0
    for (let freq of s) {
        counter[freq] ? counter[freq] += 1 : counter[freq] = 1
    }

    // Create a dictionary of
    for (let freq in counter) {
        valCounter[counter[freq]] ? valCounter[counter[freq]] += 1 : valCounter[counter[freq]] = 1
        if (counter[freq] == 1) freqOnce+=1
    }

    for (let freq in valCounter) {
        if (valCounter[freq] > repeatedFreq) repeatedFreq = freq
        freqCount += 1
    }
    // console.log("frequency count => " + freqCount)
    for (let freq in counter) {
        if (counter[freq] != repeatedFreq) {
            // console.log('freq => ' + counter[freq] + " | " + repeatedFreq + " <= repeatedFreq")
            over += Math.abs(counter[freq] - repeatedFreq)
        }
    }

    // console.log("over => " + over)
    // console.log("freqOnce => " + freqOnce)
    let output = undefined
    if (over > 1) {
        output = "NO"
    } else {
        output = "YES"
    }
    if (freqOnce == 1  && freqCount == 2 ) {
        output = "YES"
    }
    return output
}

console.log(isValid("ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"))
console.log(isValid("abcdefghhgfedecba"))
console.log(isValid("aabbcd"))
console.log(isValid("xxxaabbccrry"))
