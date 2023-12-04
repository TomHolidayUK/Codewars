function topThreeWords(text) {
    const array = text.replace(/[\/#.,]/g, '').toLowerCase().split(/\s+/);
    const newArray = array.filter( element => element !== "")
    const newArray2 = newArray.filter( element => element !== "'")
    let frequencies = {}
   
    newArray2.forEach((element) => {
        if (frequencies.hasOwnProperty(element)) {
            frequencies[element] += 1
        } else {
            frequencies[element] = 1
        }
    })

    const arrayOfSortedFrequencies = Object.entries(frequencies).sort((a, b) => b[1] - a[1]);
    const firstThree = arrayOfSortedFrequencies.splice(0, 3).map(entry => entry[0])
    return firstThree
}

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))
// console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"))
// console.log(topThreeWords("  , e   .. "))
// console.log(topThreeWords("  '  "))